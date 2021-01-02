
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
                // done
                case "View All Employees":
                    viewAllEmployees();
                    break;
                // done
                case "View All Employees by Department":
                    viewAllEmployeesByDepartment();
                    break;
                // done
                case "View All Employees by Manager":
                    viewAllEmployeesByManager();
                    break;
                // done
                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                // done
                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
                // done
                case "View All Roles":
                    viewAllRoles();
                    break;
                // done
                case "Add Role":
                    addRole();
                    break;
                // done
                case "Remove Role":
                    removeRole();
                    break;
                // done
                case "View All Departments":
                    viewAllDepartments();
                    break;
                // done
                case "Quit":
                    connection.end();
                    break;
            };

        });

};

function updateEmployeeRole() {

    // first we need to query the database and get a list of all the employees 

    connection.query(`

    SELECT
    employee.first_name,
    employee.last_name
    FROM 
    employee

    `, (err, res) => {


        if (err) throw err;

        // then use that list of names as an inquirer prompt 
        let employeeNameArray = [];

        Object.keys(res).forEach(function (item) {

            const first = res[item].first_name;
            const last = res[item].last_name;
            const complete = `${first} ${last}`;
            employeeNameArray.push(complete);
        });

        inquirer
            .prompt([{
                name: "employeeToUpdate",
                message: "Employee to Update:",
                type: "list",
                choices: employeeNameArray

            },
            {
                name: "newEmployeeRole",
                message: "New employee role ID: ",
                type: "input"
            }
            ])
            .then(res => {

                let fullNameSplit = res.employeeToUpdate.split(" ");

                // make SQL query to remove this employee from the database
                connection.query(`

                UPDATE
                employee
                SET role_id = '${res.newEmployeeRole}'
                WHERE
                first_name = '${fullNameSplit[0]}'
                AND
                last_name = '${fullNameSplit[1]}'
               
                `,
                    (err) => {

                        console.log("Employee role updated.");
                        if (err) throw err;
                        mainMenu();

                    });
            })
            .catch(error => {
                if (error.isTtyError) {

                    console.log(`ERROR: Prompt couldn't be rendered in the current environment (${error})`);
                } else {
                    console.log(`ERROR: ${error}`);
                }
            });





    });





};

function removeRole() {

    // query database and retrieve list of roles
    connection.query(`
        SELECT 
        role.title         
        FROM 
        role;
        `,
        (err, res) => {
            if (err) throw err;

            let roleNameArray = [];
            Object.keys(res).forEach(function (item) {

                const roleName = res[item].title;
                roleNameArray.push(roleName);

            });

            // make inquirer prompt with roleNameArray

            inquirer
                .prompt([{
                    name: "roleSelected",
                    type: "list",
                    message: "Select Role to DELETE from Database:",
                    choices: roleNameArray
                }])
                .then(res => {
                    // query the database and delete the selected role
                    connection.query(`

                        DELETE FROM 
                        role
                        WHERE
                        title = '${res.roleSelected}'

                    `, (err) => {


                        if (err) throw err;

                        console.log("Role has been successfully deleted from the database.");
                        mainMenu();

                    });

                })
                .catch(error => {
                    if (error.isTtyError) {

                        console.log(`ERROR: Prompt couldn't be rendered in the current environment (${error})`);
                        mainMenu();
                    } else {
                        console.log(`There was an error.\nERROR: ${error}`);
                        mainMenu();
                    }
                });
        })
};



function addEmployee() {

    inquirer
        .prompt(prompts.addEmployee)
        .then(answers => {
            // INSERT INTO role database with this provided data
            connection.query(`

        INSERT INTO employee
        SET ?  
        `,
                {
                    first_name: answers.firstname,
                    last_name: answers.lastname,
                    role_id: answers.role,
                    manager_id: answers.manager


                }
                , (err) => {

                    if (err) throw err;
                    console.log("Employee has been added.");
                    mainMenu();

                });
        })
        .catch(error => {
            if (error.isTtyError) {

                console.log(`ERROR: Prompt couldn't be rendered in the current environment (${error})`);
            } else {
                console.log(`There was an error.\nERROR: ${error}`);
            }
        });


};

function addRole() {

    inquirer
        .prompt(prompts.addRole)
        .then(answers => {
            // INSERT INTO role database with this provided data
            connection.query(`

            INSERT INTO role
            SET ?  
            `,
                {
                    title: answers.roleTitle,
                    salary: answers.roleSalary,
                    department_id: answers.departmentId,
                }
                , (err) => {

                    if (err) throw err;
                    console.log("Role has been added.");
                    mainMenu();

                });

        })
        .catch(error => {
            if (error.isTtyError) {

                console.log(`ERROR: Prompt couldn't be rendered in the current environment (${error})`);
            } else {
                console.log(`There was an error.\nERROR: ${error}`);
            }
        });
}

function genericQueryHolder() {
    // use this as a template for our queries & delete when project is complete

    connection.query(`
    
    
    
    `, (err, res) => {


        if (err) throw err;
        console.table(res);
        mainMenu();

    });
}

function removeEmployee() {

    // first we need to query the database and get a list of all the employees 

    connection.query(`

    SELECT
    employee.first_name,
    employee.last_name
    FROM 
    employee

    `, (err, res) => {


        if (err) throw err;

        // then use that list of names as an inquirer prompt 
        let employeeNameArray = [];

        Object.keys(res).forEach(function (item) {

            const first = res[item].first_name;
            const last = res[item].last_name;
            const complete = `${first} ${last}`;
            employeeNameArray.push(complete);
        });

        inquirer
            .prompt([{
                name: "nameToRemove",
                message: "Employee to Remove:",
                type: "list",
                choices: employeeNameArray

            }

            ])
            .then(answers => {

                let fullNameSplit = answers.nameToRemove.split(" ");

                // make SQL query to remove this employee from the database
                connection.query(`

                DELETE FROM 
                employee
                WHERE
                first_name = '${fullNameSplit[0]}'
                AND
                last_name = '${fullNameSplit[1]}'
               
                `,
                    (err) => {

                        console.log("Employee Deleted.");
                        if (err) throw err;
                        mainMenu();

                    });
            })
            .catch(error => {
                if (error.isTtyError) {

                    console.log(`ERROR: Prompt couldn't be rendered in the current environment (${error})`);
                } else {
                    console.log(`ERROR: ${error}`);
                }
            });





    });

};



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
        role.title AS Title, 
        role.salary AS Salary, 
        role.department_id as 'Dept. ID'        
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

