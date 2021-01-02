DROP TABLE IF EXISTS employee, role, department;

DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
		    id INTEGER NOT NULL AUTO_INCREMENT,
	      name VARCHAR(30),
			   PRIMARY KEY (id)
);

CREATE TABLE role (
			id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
		 title VARCHAR(30) NOT NULL,
		salary DECIMAL NOT NULL,
 department_id INTEGER, 
			   FOREIGN KEY (department_id) REFERENCES department (id) 
);

CREATE TABLE employee (
	        id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
       role_id INTEGER, 
	manager_id INTEGER, 
			   PRIMARY KEY (id),
               FOREIGN KEY (role_id) REFERENCES role(id),
               FOREIGN KEY (manager_id) REFERENCES employee (id)   
               ON DELETE CASCADE
);


SELECT 
employee.first_name AS First, 
employee.last_name AS Last, 
role.title AS Title, 
role.salary AS Salary, 
department.name AS Department, 
CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee 
INNER JOIN role on role.id = employee.role_id 
INNER JOIN department 
on department.id = role.department_id 
LEFT JOIN employee e 
on employee.manager_id = e.id
ORDER BY Last;










