class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


   displayName()
   {
    console.log(this.name);
   }

}

class AccountantEmployee extends Employee {
    calculateEmployeeSalary() {
        //calculate salary 
        return 10000;
    }
}

class HREmployee extends Employee {
    generateReports() {
        console.log("Report generated")
    }
}

class TechnicalEmployee extends Employee {
    fixBug() {
        //fix bug
        console.log("Bug fixed")
    }
}