const setPrice = () => {
    const fiyat = prompt("Please enter the price");
    const toplamFiyat = getPrice(fiyat, 20, 10);
    alert(`Toplam fiyat: ${toplamFiyat}`);
};

const getPrice = (urunFiyati, kdv, indirimOrani) => {
    
};