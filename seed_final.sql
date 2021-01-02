INSERT INTO department(name)
values('Superstars');
INSERT INTO department(name)
values('Technical');
INSERT INTO department(name)
values('Finance');
INSERT INTO department(name)
values('Legal');
INSERT INTO department(name)
values('Executive');


INSERT INTO role(title, salary, department_id)
values('Wrestler', 120000, 1);
INSERT INTO role(title, salary, department_id)
values('Writer',  40000, 2);
INSERT INTO role(title, salary, department_id)
values('Manager', 86000, 1);
INSERT INTO role(title, salary, department_id)
values('Accountant', 62000, 3);
INSERT INTO role(title, salary, department_id)
values('Lawyer', 140000, 3);
INSERT INTO role(title, salary, department_id)
values('CEO', 1000000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
values('Vince', 'McMahon', 6, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Paul', 'Heyman', 1, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Roman', 'Reigns', 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Jay', 'Uso', 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Sasha', 'Banks', 1, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Troy', 'Dorman', 4, 5);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Orange', 'Cassidy', 5, 5);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Finn', 'Balor', 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
values('Alexa', 'Bliss', 5, 1);

