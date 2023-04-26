class Employees {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this._salary = salary; // _salary is a private field
      this._isHired = true; // _isHired is a private field that initializes with a value of true
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(amount) {
      this._salary = amount;
    }
  
    get isHired() {
      return this._isHired;
    }
  
    setStatus(command) {
      if (command === "hire") {
        this._isHired = true;
      } else if (command === "fire") {
        this._isHired = false;
      }
    }
  
    static getEmployees() {
      // Return an array of all employees
      return Employees.employees;
    }
  
    static getTotalPayroll() {
      // Calculate and return the total payroll for all employees
      return Employees.employees.reduce((acc, employee) => acc + employee.salary, 0);
    }
  }
  
  
  

module.exports = {
    Employees
}