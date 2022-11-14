class Employee {
    constructor(name, employee_id, email) {
        this.name = name;
        this.employee_id = employee_id;
        this.email = email;

    }

    getName() {
      return this.name  
    }

    getId() {
        return this.employee_id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}
module.exports = Employee;