const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, employee, officeNumber) {
        super(name, id, email, officeNumber)
        this.officeNumber = officeNumber;
    }

    //getRole()overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;