\c employees_db;

INSERT INTO departments (name)
VALUES ('Accounting'),
        ('Engineering'),
        ('Human Resources'),
        ('IT'),
        ('Marketing'),
        ('Customer Services'),
        ('Operations'),
        ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 100000, 1),
       ('Engineer', 100000, 2),
       ('HR Representative', 55000, 3),
        ('IT Technician', 90000, 4),
        ('Human Relations Supervisor', 110000, 5),
        ('Customer Service Representative', 60000, 6),
        ('Business Supervisor', 110000, 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Kathy', 'Henderson', 1, 7),
        ('Lacy', 'Taylor', 2, 8),
        ('James', 'Williams', 3, 6),
        ('Sandra', 'Smith', 4, 8),
        ('Dillard', 'Dickerson', 5, NULL),
        ('Micheal', 'Bender', 6, 5),
        ('Megan', 'Malone', 7, NULL),
        ('Cary', 'Mason', 8, NULL);