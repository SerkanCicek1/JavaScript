const nameInputEl = document.querySelector("#textName");
console.log(nameInputEl.value);

const paragraphEl = document.querySelector("#content");
console.log(paragraphEl);

paragraphEl.innerHTML = `
    <strong>
        <em>    
            My name is: ${nameInputEl.value}
        </em>
    </strong>
`;