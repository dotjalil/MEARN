"use strict";
// Task 1
var arr = [];
// arr = [1, 2, true];
arr = [1, 2, "true"];
// arr = [1, 2, [1]];
arr = [1, 2, "Mo"];
class Employee {
    constructor(fname, lname, address) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.salary = 0;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(value) {
        this.salary = value;
    }
}
class Manager extends Employee {
    constructor(fname, lname, address) {
        super(fname, lname, address);
        this.fname = fname;
        this.lname = lname;
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
