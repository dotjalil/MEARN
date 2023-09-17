// Task 1
var arr: (string | number)[] = [];
// arr = [1, 2, true];
arr = [1, 2, "true"];
// arr = [1, 2, [1]];
arr = [1, 2, "Mo"];

// Task 2
interface EmployeeInterface {
  fname: string;
  lname: string;
  getSalary(): void;
  // setSalary(): () => void;
  address: string;
}

class Employee implements EmployeeInterface {
  private salary: number;
  constructor(
    public fname: string,
    public lname: string,
    public address: string
  ) {
    this.salary = 0;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(value: number): void {
    this.salary = value;
  }
}

class Manager extends Employee {
  constructor(public fname: string, public lname: string, address: string) {
    super(fname, lname, address);
  }
}

const mo = new Employee("Mohamed", "Abduljalil", "Cairo, Egypt");
mo.setSalary(40000);

console.log("mo", mo);
console.log("mo.salary", mo.getSalary());
console.log("hi");

const steve = new Manager("Steve", "Jobs", "Florida, US");
steve.setSalary(1000000);
console.log("steve", steve);
console.log("steve.getSalary", steve.getSalary());
