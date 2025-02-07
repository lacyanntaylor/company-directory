\c employees_db;

INSERT INTO department (name)
VALUES ('Accounting'),
        ('Engineering'),
        ('Human Resources'),
        ('IT'),
        ('Marketing'),
        ('Customer Services'),
        ('Operations'),
        ('Sales');

-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Accounting Supervisor', 100000, 1),
--         ('Engineering Supervisor', 120000, 2)
--         ('HR Supervisor', 75000, 3)
--         ('IT Supervisor', 130000, 4)
--         ('Marketing Supervisor', 80000, 5)
--         ('Customer Service Supervisor', 80000, 6)
--         ('Operations Supervisor', 110000, 7)
--         ('Sales Supervisor', 80000, 8);

-- INSERT INTO employees (first_name, last_name, role_id, manager_id)
-- VALUES ('Kathy', 'Henderson', 1, NULL)
--         ('Lacy', 'Taylor', 2, 1)
--         ('James', 'Williams', 3, )
--         ('Sandra', 'Smith', 4, )
--         ('Dillard', 'Dickerson', 5, )
--         ('Micheal', 'Bender', 6, )
--         ('Megan', 'Malone', 7, )
--         ('Cary', 'Mason', 8, );