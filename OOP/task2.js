function Employee(employeeData) {
  this.id = employeeData.id;
  this.firstName = employeeData.firstName;
  this.lastName = employeeData.lastName;
  this.birthday = employeeData.birthday;
  this.salary = employeeData.salary;
  this.position = employeeData.position;
  this.department = employeeData.department;

  Object.defineProperties(this, {
    age: {
      enumerable: true,
      configurable: true,
      get() {
        const yearInMlls = 1000 * 60 * 60 * 24 * 365;
        const ageInMlls = Date.now() - Date.parse(this.birthday);
        return Math.floor(ageInMlls / yearInMlls);
      },
    },
    fullName: {
      value: `${this.firstName} ${this.lastName}`,
      enumerable: true,
      configurable: true,
      writable: false,
    },
  });

  Employee.EMPLOYEES.push(this);
}
Employee.EMPLOYEES = [];
Employee.prototype = {
  constructor: Employee,
  quit() {
    const employeeIndex = Employee.EMPLOYEES.indexOf(this);
    Employee.EMPLOYEES.splice(employeeIndex, 1);
  },
  retire() {
    console.log('It was such a pleasure to work with you!');
    this.quit();
  },
  getFired() {
    console.log('Not a big deal!');
    this.quit();
  },
  changeDepartment(newDepartment) {
    this.department = newDepartment;
  },
  changePosition(newPosition) {
    this.position = newPosition;
  },
  changeSalary(newSalary) {
    this.salary = newSalary;
  },
  changeBenefits(newBenefits) {
    const { salary, position, department } = newBenefits;
    if (salary) this.changeSalary(salary);
    if (position) this.changePosition(position);
    if (department) this.changeDepartment(department);
  },
  getPromoted(newBenefits) {
    this.changeBenefits(newBenefits);
    console.log('Yoohooo!');
  },
  getDemoted(punishment) {
    this.changeBenefits(punishment);
    console.log('Damn!');
  },
};

function BlueCollarWorker(...args) {
  Employee.apply(this, ...args);
}
BlueCollarWorker.prototype = Employee.prototype;
BlueCollarWorker.prototype.constructor = BlueCollarWorker;

function Manager(...args) {
  Employee.apply(this, args);

  this.position = 'manager';

  Object.defineProperty(this, 'managedEmployees', {
    enumerable: true,
    configurable: true,
    get() {
      return Employee.EMPLOYEES.filter((employee) => employee.department === this.department && employee.position !== 'manager');
    },
  });
}
Manager.prototype = Employee.prototype;
Manager.prototype.constructor = Manager;

function HRManager(...args) {
  Manager.apply(this, args);

  this.department = 'hr';
}
HRManager.prototype = Manager.prototype;
HRManager.prototype.constructor = HRManager;

function SalesManager(...args) {
  Manager.apply(this, args);

  this.department = 'sales';
}
SalesManager.prototype = Manager.prototype;
SalesManager.prototype.constructor = SalesManager;

function ManagerPro(manager) {
  function promoteManagedEmployee(fullName, benefits) {
    const myEmployee = this.managedEmployees.find((employee) => employee.fullName === fullName);
    myEmployee.getPromoted(benefits);
  }

  return Object.assign(manager, { promoteManagedEmployee });
}
