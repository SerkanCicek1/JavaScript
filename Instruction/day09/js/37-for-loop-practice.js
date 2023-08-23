/* 

discount
productList

*/

// DOM ELEMENTS
const discountEl = document.querySelector("#discount");
const productList = document.querySelectorAll("#productList li");

function setPrices() {
    let discount = discountEl.value;

    console.log(Boolean(discount))
    console.log(!discount);
    console.log(isNaN(discount))
    console.log(discount > 100);

    discount = (!discount || isNaN(discount) || discount > 100 || discount < 0) ? 0 : discount;

    for (let i = 0; i < productList.length; i++) {
        console.log(productList[i])
        const priceEl = productList[i].querySelector("span > em");
        const price = priceEl.innerText;
        const discountedPrice = price - (price * discount / 100).toFixed();
        priceEl.innerText = discountedPrice;
    }
}