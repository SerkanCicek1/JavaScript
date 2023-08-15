function showOnConsole() {
    console.log("Console'da goster!");
}


/* 

 1- kullanici input'a girdi yazacak
 2- kullanici butona tiklayacak
 3- butona tiklandiginda, bir fonksiyon calisacak
 4- fonksiyon, input'taki value(deger)'yu alacak
 5- fonksiyon, paragraph elementine ulasacak
 6- fonksiyon, paragraph elementinin textContent/innerHTML/innerText'ini input'taki value ile degistirecek

*/


function sayHello() {
    const inputValue = document.querySelector("#nameInput").value;
    console.log(inputValue);

    const welcomeText = document.querySelector("#welcomeText");
    console.log(welcomeText);

    welcomeText.textContent = `Hello ${inputValue}!`;
}