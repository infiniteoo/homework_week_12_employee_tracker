const prompts = {
    mainMenu: {
        name: "mainMenu",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Update Employee Role",
            "Remove Employee",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Quit",
        ]


    }




};

module.exports = prompts;