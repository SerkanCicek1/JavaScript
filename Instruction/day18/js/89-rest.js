function topla(s1, s2) {
    return s1 + s2;
}

console.log(topla(3, 5));

const arr = [4, 2, 7, 1, 9, 5, 3, 8, 6, 0, 10];

const sumArr = arr.reduce((acc, val) => acc + val);
console.log(sumArr);

const topla2 = (...sayilar) => {
    const toplam = sayilar.reduce((acc, val) => acc + val);
    return toplam;
}

console.log(topla2(3, 5, 7, 9, 11, 13, 15, 17, 19, 21));

// const sayilar = new Array(3, 5, 7, 9, 11, 13, 15, 17, 19, 21);