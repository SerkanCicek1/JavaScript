const salaryEl = document.querySelector("#salary");
const resultEl = document.querySelector("#result");


function setSalary() {
    const status =
        document.querySelector("input[name='status']:checked")
            ? document.querySelector("input[name='status']:checked").value
            : null;

    if (status) {
        console.log("buraya girdi");
        let salary = salaryEl.value;

        if (salary) {
            salary = status === "retired" ? salary * 0.9 : salary * 0.95;
            resultEl.innerText = `Bu sahsin maasi ${salary.toFixed()} TL olarak hesaplanmistir.`;
        }
    }
}