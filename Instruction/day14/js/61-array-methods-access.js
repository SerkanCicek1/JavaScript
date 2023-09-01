const hayvanlar = ['fil', 'kus', 'deve', 'fare', 'kedi', "kus"];

console.log(hayvanlar.includes("fil"));
console.log(hayvanlar.includes(3));

console.log(hayvanlar.join("")); // "filkusdevefarekedi";
console.log(hayvanlar.join("-")); // "fil-kus-deve-fare-kedi";
console.log(hayvanlar.join()); // "fil,kus,deve,fare,kedi";

console.log(hayvanlar.slice(2)); // ["deve", "fare", "kedi"];
console.log(hayvanlar.slice(2, 4)); // ["deve", "fare"];

console.log(hayvanlar.toString()) // "fil,kus,deve,fare,kedi";

console.log(hayvanlar.indexOf("kus")); // 1
console.log(hayvanlar.indexOf("armut")); // -1

console.log(hayvanlar.lastIndexOf("kus")); // 5

const harfler = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rakamlar = [1, 2, 3, 4, 5, 6, 7, 8];

const harflerVeRakamlar = harfler.concat(rakamlar, 9, 10, 11, 12, 13, 14, 15, 16, "j", "k", "l", "m", "n", "o", "p");
console.log(harflerVeRakamlar); // ["a", "b", "c", "d", "e", "f", "g", "h", 1, 2, 3, 4, 5, 6, 7, 8];