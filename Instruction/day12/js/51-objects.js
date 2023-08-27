const employee = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-01-01',
    salary: 3000,
    department: {
        name: 'IT',
        location: 'London'
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    increaseSalary: function (amount) {
        if (amount > 3000) return
        this.salary += amount;
    }
};

console.log(employee);
console.log(employee.firstName);
console.log(employee.department.location);

console.log(this);

const foo = () => {
    console.log(this);
}

foo();
employee.increaseSalary(1000);
console.log(employee.salary);

btn.addEventListener('click', function (e) {
    console.log(this);
    console.log(e.target);
});