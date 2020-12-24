INSERT INTO employee (first_name, last_name, role_id) VALUES ('Troy', 'Dorman', 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Johnny', 'Silverhand', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Kaladin', 'Stormblessed', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Chris', 'Jericho', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Cody', 'Rhodes', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Sasha', 'Banks', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Alexa', 'Bliss', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jon', 'Moxley', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Kenny', 'Omega', 1);

INSERT INTO employee_department (dept_name) VALUES ('Talent');
INSERT INTO employee_department (dept_name) VALUES ('Management');
INSERT INTO employee_department (dept_name) VALUES ('Finance');
INSERT INTO employee_department (dept_name) VALUES ('Technical');


INSERT INTO employee_role (title, salary, department_id) VALUES ('Wrestler', 100000, 1);
INSERT INTO employee_role (title, salary, department_id) VALUES ('Writer', 50000, 2);
INSERT INTO employee_role (title, salary, department_id) VALUES ('Accountant', 154000, 3);
INSERT INTO employee_role (title, salary, department_id) VALUES ('Producer', 40000, 4);



SELECT * FROM employee;


