const meyveler = ["Elma", "Armut", "Muz", "Kivi"];


console.log(meyveler.pop()); // son elemanı siliyor ve return eder
console.log(meyveler);

console.log(meyveler.push("Ananas")) // belirtilen elemani array'in sonuna ekler ve geriye array'in yeni uzunlugunu dondurur
console.log(meyveler);

console.log(meyveler.shift()); // ilk elemani siler ve return eder
console.log(meyveler);

console.log(meyveler.unshift("Cilek")) // belirtilen elemani array'in basina ekler ve geriye array'in yeni uzunlugunu dondurur
console.log(meyveler);

console.log(meyveler.reverse()); // array'i ters cevirir ve return eder
console.log(meyveler);

console.log(meyveler.sort()); // array'i alfabetik siraya gore siralar ve return eder
console.log(meyveler);

console.log(meyveler.splice(1, 0, "Kiraz", "Karpuz")) // 1. indexten baslayarak 2 eleman siler ve yerine belirtilen elemanlari ekler
console.log(meyveler);

console.log(meyveler.splice(3, 1, "Kayisi")) // 3. indexten baslayarak 1 eleman siler ve yerine belirtilen elemani ekler
console.log(meyveler);