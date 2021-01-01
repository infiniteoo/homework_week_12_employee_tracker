
const mysql = require('mysql');
const inquirer = require('inquirer');
const art = require('./art.js');
const prompts = require('./prompts');


const connection = connectToDB();
clearConsole();
console.log(art);
mainMenu();

function mainMenu() {
    inquirer
        .prompt([prompts.mainMenu])
        .then(response => {

            switch (response.mainMenu) {

                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Employees by Department":
                    viewAllEmployeesByDepartment();
                    break;

                case "View All Employees by Manager":
                    viewAllEmployeesByManager();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Remove Role":
                    removeRole();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "Quit":
                    connection.end();
                    break;
            };

        });

}


function viewAllEmployees() {

    connection.query(`
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
        `, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
};

function viewAllEmployeesByDepartment() {

    connection.query(`
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
        ORDER BY Department;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
};

function viewAllEmployeesByManager() {

    connection.query(`
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
        ORDER BY Manager DESC;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
};

function viewAllDepartments() {

    connection.query(`
        SELECT 
        department.name as 'Department Name'
        FROM department;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
};

function viewAllRoles() {

    connection.query(`
        SELECT 
        role.title, role.salary, role.department_id        
        FROM role;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
};




function connectToDB() {

    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "blahblah",
        port: 3306,
        database: "company_db"
    });


    connection.connect(err => {

        if (err) throw err;
        console.log("connected!");

    });
    return connection;

};


function clearConsole() {

    // credit : https://gist.github.com/timneutkens/f2933558b8739bbf09104fb27c5c9664

    const readline = require('readline');
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};

