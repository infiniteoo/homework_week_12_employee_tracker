const cTable = require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');
const ascii = require('ascii-art');



let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blahblah",
    port: 3306
});


con.connect(err =>{

    if (err) throw err;
    console.log("connected!");
    


});

