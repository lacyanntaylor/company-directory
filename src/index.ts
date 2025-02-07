import inquirer from "inquirer";
import { pool, connectToDb } from './db/connection.js';

await connectToDb();

inquirer.prompt( 
  [
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
        "update an employee role"
      ]
    }
  ]
)
.then(({action}) => {

  if(action == "view all departments") {

    pool.query("SELECT * FROM department;")
    .then(results => {
      // console.log(results)
      const departments = results.rows;

      console.table(departments)
    })

  }
  if(action == "view all roles") {

  }
  if(action == "view all employees") {

  }
  if(action == "add a department") {

    inquirer.prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the new department?"
      }
    ])
    .then(({department_name}) => {
        pool.query("INSERT INTO department (name) VALUES ($1)", [department_name])
      .then(results => {
        console.log('Department has been added!')
      })
    })


   
  }
  if(action == "add a role") {

  }
  if(action == "add an employee") {

  }
  if(action == "update an employee role") {

    }


})