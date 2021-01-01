insert INTO employee_department(dept_name)
values('Sales');
insert INTO employee_department(dept_name)
values('Engineering');
insert INTO employee_department(dept_name)
values('Finance');
insert INTO employee_department(dept_name)
values('Legal');
insert INTO employee_department(dept_name)
values('Manager');


insert INTO employee_role (title, salary, department_id)
values('Sales Manager', 100000, 1);
insert INTO employee_role(title, salary, department_id)
values('Salesperson',  40000, 1);
insert INTO employee_role(title, salary, department_id)
values('Lead Engineer', 45000, 2);
insert INTO employee_role(title, salary, department_id)
values('Accountant', 45000, 3);
insert INTO employee_role(title, salary, department_id)
values('Legal',  60000, 3);
insert INTO employee_role(title, salary, department_id)
values('Manager', 61000, 3);


insert INTO employee (first_name, last_name, role_id, manager_id)
values('John', 'Johnson', 3, NULL);
insert INTO employee(first_name, last_name, role_id, manager_id)
values('Peter', 'Peterson', 2, 1);
insert INTO employee(first_name, last_name, role_id, manager_id)
values('Sue', 'Sueson', 3, 3);
insert INTO employee(first_name, last_name, role_id, manager_id)
values('Robert', 'Robertson', 4, 3);
insert INTO employee(first_name, last_name, role_id, manager_id)
values('Marge', 'Margeson', 5, 3);