const salaries = [4000, 3500, 2000, 2500, 5000];

const totalSalary = salaries
    .filter((salary) => salary < 3000)
    .map((salary) => salary * 1.1)
    .reduce((acc, cur) => acc + cur);


console.log(totalSalary);

let toplam = 0;
for (const salary of salaries) {
    if (salary < 3000) {
        toplam += salary * 1.1;
    }
}

console.log(toplam)