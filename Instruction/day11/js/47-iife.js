(function () {
    console.log('IIFE');
})();

!function () {
    console.log('IIFE1');
}();

+function () {
    console.log('IIFE2');
}();

-function () {
    console.log('IIFE3');
}();

(() => {
    console.log('IIFE4');
})();

const foo = (function () {
    return 'IIFE5';
})();

console.log(foo);