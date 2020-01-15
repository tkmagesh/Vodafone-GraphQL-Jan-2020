class Employee{
    id = 0;
    name = '';
    salary = 0;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    display(){
        console.log(`id=${this.id}, name=${this.name} and salary=${this.salary}`);
    }
}

class FullTimeEmployee extends Employee {
    benefits = '';
    constructor(id, name, salary, benefits) {
        super(id, name, salary)
        this.benefits = benefits;
    }
}

var fte = new FullTimeEmployee(300, 'Ganesh', 30000, 'Healthcare')