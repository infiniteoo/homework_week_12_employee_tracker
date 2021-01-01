const cTable = require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');
const art = require('./art.js');
const prompts = require('./prompts');



const connection = connectToDB();
clearConsole();
console.log(art);
mainMenu();

function employeeView() {
    let query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        {
            console.table(res);
        }
        mainMenu();
    })
};


function mainMenu() {
    inquirer
        .prompt([prompts])
        .then(response => {

            switch (response.mainMenu) {

                case "View All Employees":
                    console.log("View All Employees");
                    viewAllEmployees();
                    break;
                case "View All Employees by Department":
                    console.log("View All Employees by Department");
                    break;
                case "View All Employees by Manager":
                    console.log("View All Employees by Manager");
                    break;
                case "Add Employee":
                    console.log("Add Employee");
                    break;
                case "Update Employee Role":
                    console.log("Update Employee Role");
                    break;
                case "Remove Employee":
                    console.log("Remove Employee");
                    break;
                case "Update Employee Manager":
                    console.log("Update Employee Manager");
                    break;
                case "View All Roles":
                    console.log("View All Roles");
                    break;
                case "Add Role":
                    console.log("Add Role");
                    break;
                case "Remove Role":
                    console.log("Remove Role");
                    break;
                case "View All Departments":
                    console.log("View All Departments");
                    break;
                case "Quit":
                    console.log("Quit");
                    break;




            };

        });

}


function viewAllEmployees() {

    connection.query("SELECT * FROM employee INNER JOIN employee_role", (err, res) => {
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

