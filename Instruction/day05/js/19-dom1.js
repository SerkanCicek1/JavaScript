console.log(document);

const h1El = document.querySelector('h1');
console.log(h1El);

const aboutUsEl = document.querySelector(`#aboutUs`);
console.log(aboutUsEl);

const spanEl = document.querySelector(`#aboutUs span`);
console.log(spanEl);

const menuEl = document.querySelector(`ul.menu`);
console.log(menuEl);

const menuItem3 = document.querySelector(`ul.menu li:nth-child(3)`);
console.log(menuItem3);

const menuElAll = document.querySelectorAll(`.menu`);
console.log(menuElAll);

console.log(h1El.innerText);
console.log(h1El.innerHTML);

h1El.innerText = `<span>hello</span>`;
h1El.innerHTML = `<span style="color:red; display:none">hello</span>`;
console.log(h1El.innerText);
console.log(h1El.innerHTML);
console.log(h1El.textContent);

menuItem3.innerText = "Yeni icerik";

const menuItem3Text = menuItem3.innerText;

document.querySelector("ul.menu li:last-child").innerText += ` ${menuItem3Text}`;

document.querySelector("ul.menu li:nth-child(4)").innerText = "<b>Hello World</b>";

document.querySelector("ul.menu li:nth-child(4)").innerHTML = "<b>Hello World</b>";