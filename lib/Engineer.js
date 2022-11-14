const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id , email, github) {
      super(name, employee_id, email);
      this.github = github

    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.getGithub
    }

}

module.exports = Engineer;