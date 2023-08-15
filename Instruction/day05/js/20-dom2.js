const h1El = document.querySelector("#pageTitle");
console.log(h1El);
console.log(h1El.classList);

h1El.classList.add("title");
console.log(h1El.classList);

const aboutEl = document.querySelector("#about");
aboutEl.classList.add("bg-primary");
aboutEl.classList.remove("bg-primary");