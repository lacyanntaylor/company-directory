DROP DATABASE IF EXISTS
CREATE DATABASE employees_role_department;

\c employees_role_department;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
)

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
)

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
    )