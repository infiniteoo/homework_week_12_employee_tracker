const cTable = require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');
const art = require('./art.js');
const prompts = require('./prompts');



/* connectToDB(); */
clearConsole();
console.log(art);


inquirer
    .prompt([prompts])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers.list);
    });




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


};


function clearConsole() {

    // credit : https://gist.github.com/timneutkens/f2933558b8739bbf09104fb27c5c9664

    const readline = require('readline');
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};

