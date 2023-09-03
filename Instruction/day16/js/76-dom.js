const titleElement = document.getElementById('title');
titleElement.innerHTML = "DOM - Document Object Model";

const articleElements = document.getElementsByTagName("article");
console.log(articleElements);
console.log(articleElements[0]);

articleElements[0].innerHTML = "lorem ipsum dolor sit amet";

const paragraphElements = document.getElementsByClassName("paragraph");
console.log(paragraphElements);
console.log(paragraphElements[0]);

paragraphElements[0].innerHTML = "Merhabalar";
console.log(paragraphElements[1]);