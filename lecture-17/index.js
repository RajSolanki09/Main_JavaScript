class Employee {
    #name
    #salary
    constructor(id, name, salary) {
      this.id = id;
      this.#name = name;  
      this.#salary = salary;
    }
  
    getName() {
      return this.#name;
    }
  
    setName(name) {
      this.#name = name;
    }
  
    getDetails() {
      return `ID: ${this.id}, Name: ${this.getName()}, Salary: ${this.getSalary()}`;
    }
  
    getSalary() {
      return this.#salary;
    }
  
    getAnnualSalary() {
      return this.getSalary() * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(id, name, department, salary) {
      super(id, name, salary);
      this.department = department;
    }
  
    getDetails() {
      return `ID: ${this.id}, Name: ${this.getName()}, Department: ${this.department}, Salary: ${this.getSalary()}`;
    }
  
    increaseSalary(percentage) {
      this.setSalary(this.getSalary() + (this.getSalary() * percentage) / 100);
      return this.getSalary();
    }
  
    getBonus() {
      return this.getAnnualSalary() * 0.1;
    }
  
    getAnnualSalary() {
      return super.getAnnualSalary() + this.getBonus();
    }
  }
  
  class Developer extends Employee {
    constructor(id, name, department, salary, experience) {
      super(id, name, salary);
      this.department = department;
      this.experience = experience;
    }
  
    getDetails() {
      return `ID: ${this.id}, Name: ${this.getName()}, Department: ${this.department}, Salary: ${this.getSalary()}, Experience: ${this.experience}`;
    }
  
    increaseSalary(percentage) {
      this.setSalary(this.getSalary() + (this.getSalary() * percentage) / 100);
      return this.getSalary();
    }
  
    getBonus() {
      return this.getSalary() * 0.05;
    }
  
    getAnnualSalary() {
      return super.getAnnualSalary() + this.getBonus();
    }
  }
  
  let employee1 = new Employee(1, "raj", 50000);
  console.log(employee1.getDetails());
  
  let manager1 = new Manager(2, "Jane Smith", "Finance", 70000);
  console.log(manager1.getDetails());
  manager1.increaseSalary(5);