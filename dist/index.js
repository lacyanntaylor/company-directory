import inquirer from "inquirer";
import { pool, connectToDb } from './db/connection.js';
await connectToDb();
function mainMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "exit",
            ],
        },
    ])
        .then(({ action }) => {
        if (action === "view all departments") {
            pool.query("SELECT * FROM department;").then((results) => {
                console.table(results.rows),
                    mainMenu();
            });
        }
        if (action === "view all roles") {
            pool.query("SELECT * FROM role;")
              .then((results) => {
                if (results.rows.length === 0) {
                  console.log("No roles found in database.");
                } else {
                  console.table(results.rows);
                }
                mainMenu();
              })
              .catch((err) => {
                console.error("Error fetching roles:", err);
                mainMenu();
              });
          }
          
        if (action === "view all employees") {
            pool.query("SELECT * FROM employee;").then((results) => {
                console.table(results.rows),
                    mainMenu();
            });
        }
        if (action === "add a department") {
            inquirer
                .prompt([
                {
                    type: "input",
                    name: "department_name",
                    message: "What is the name of the new department?",
                },
            ])
                .then(({ department_name }) => {
                return pool.query("INSERT INTO department (name) VALUES ($1)", [
                    department_name,
                ]);
            })
                .then(() => {
                console.log("Department has been added!"),
                    mainMenu();
            });
        }
        if (action === "add a role") {
            inquirer
                .prompt([
                {
                    type: "input",
                    name: "role_title",
                    message: "What is the title of the new role?",
                },
                {
                    type: "input",
                    name: "role_department_id",
                    message: "What is the department ID of the new role?",
                },
            ])
                .then(({ role_title, role_department_id }) => {
                return pool.query("INSERT INTO roles (title, department_id) VALUES ($1, $2)", [role_title, role_department_id]);
            })
                .then(() => {
                console.log("Role has been added!"),
                    mainMenu();
            });
        }
        if (action === "add an employee") {
            inquirer
                .prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the employee's first name?",
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employee's last name?",
                },
            ])
                .then(({ first_name, last_name }) => {
                return pool.query("INSERT INTO employees (first_name, last_name) VALUES ($1, $2)", [first_name, last_name]);
            })
                .then(() => {
                console.log("Employee has been added!"),
                    mainMenu();
            });
        }
        if (action === "update an employee role") {
            // Fetch all employees
            pool.query("SELECT id, first_name, last_name FROM employee;")
                .then((results) => {
                const employees = results.rows.map(emp => ({
                    name: `${emp.first_name} ${emp.last_name}`,
                    value: emp.id
                }));
                return inquirer.prompt([
                    {
                        type: "list",
                        name: "employee_id",
                        message: "Select the employee to update:",
                        choices: employees
                    }
                ]);
            })
                .then(({ employee_id }) => {
                // Fetch all roles
                return pool.query("SELECT id, title FROM roles;")
                    .then((results) => {
                    const roles = results.rows.map(role => ({
                        name: role.title,
                        value: role.id
                    }));
                    return inquirer.prompt([
                        {
                            type: "list",
                            name: "new_role_id",
                            message: "Select the new role:",
                            choices: roles
                        }
                    ]).then(({ new_role_id }) => ({ employee_id, new_role_id }));
                });
            })
                .then(({ employee_id, new_role_id }) => {
                // Update the employee's role
                return pool.query("UPDATE employees SET role_id = $1 WHERE id = $2;", [new_role_id, employee_id]);
            })
                .then(() => {
                console.log("Employee role updated successfully!"),
                    mainMenu();
            })
                .catch((err) => console.error("Error updating employee role:", err));
        }
        if (action === "exit") {
            console.log("Goodbye!");
            pool.end();
        }
    });
}
mainMenu();
