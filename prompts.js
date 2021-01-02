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
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Quit",
        ]
    },

    addRole: [
        {
            name: "roleTitle",
            type: "input",
            message: "What is the role title?",
        },
        {
            name: "roleSalary",
            type: "input",
            message: "What is the role's salary?",
        },
        {
            name: "departmentId",
            type: "input",
            message: "What is the employee's manager's id?",
        },
    ],

    addEmployee: [
        {
            name: "firstname",
            type: "input",
            message: "New employee first name?"
        },
        {
            name: "lastname",
            type: "input",
            message: "New employee last name?"
        },
        {
            name: "role",
            type: "input",
            message: "New employee role id?",
        },
        {
            name: "manager",
            type: "input",
            message: "New employee manager id?",
        }
    ]
};

module.exports = prompts;