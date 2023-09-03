const spanElements = document.querySelectorAll("#list li span");

spanElements.forEach((span) => {
    span.addEventListener("click", (e) => {
        console.log(span.textContent);
        const li = e.target.closest("li");
        li.style.backgroundColor = "pink";
        console.log(li)
    })
});

const header = document.querySelector(".uoList li:nth-child(4)").closest("body").querySelector("header");
console.log(header);

const employeeList = document.getElementById("list");
console.log(employeeList);
console.log(employeeList.children);

// childNodes
// içinde element, text, attribute, comment gibi çok farklı yapıları bulundurur.
console.log(employeeList.childNodes);

console.log(employeeList.firstElementChild);
console.log(employeeList.lastElementChild);
console.log(employeeList.parentElement.parentElement);

const li3 = document.querySelector("#list li:nth-child(3)");
console.log(li3.previousElementSibling);
console.log(li3.nextElementSibling);