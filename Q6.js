// Q6: Employee Management System

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Riya", "HR", 30000),
    new Employee(3, "Kunal", "Finance", 50000),
    new Employee(4, "Meera", "IT", 45000),
    new Employee(5, "Sahil", "Admin", 35000),
];

employees.forEach(emp => {
    console.log(`${emp.name} Annual Salary: ${emp.getAnnualSalary()}`);
});

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);
