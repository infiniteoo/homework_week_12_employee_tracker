DROP DATABASE IF EXISTS company_db;
DROP TABLE IF EXISTS employee, employee_role, employee_department;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee_department (
		    id INTEGER AUTO_INCREMENT,
	 dept_name VARCHAR(30),
			   PRIMARY KEY (id)
);

CREATE TABLE employee_role (
			id INTEGER AUTO_INCREMENT PRIMARY KEY,
		 title VARCHAR(30),
		salary DECIMAL,
 department_id INTEGER, 
			   FOREIGN KEY (department_id) REFERENCES employee_department (id) 
);

CREATE TABLE employee (
	        id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30),
     last_name VARCHAR(30),
       role_id INTEGER, 
	manager_id INTEGER, -- NEED A FOREIGN KEY HERE REFERENCING TO ANOTHER EMPLOYEE THAT MANAGES THE EMPLOYEE BEING CREATED.  THIS FIELD MAY BE NULL IF EMPLOYEE HAS NO MNGR.
			   PRIMARY KEY (id),
               FOREIGN KEY (role_id) REFERENCES employee_role(id),
               FOREIGN KEY (manager_id) REFERENCES employee (id) -- this still may be incorrect but it's our best guess so far..            
);
















