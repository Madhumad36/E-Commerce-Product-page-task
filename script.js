function changeImage(src) {
    document.getElementById("mainImage").src = src;
}

function updateQty(step) {
    const input = document.getElementById("qtyInput");
    let value = parseInt(input.value);
    value = value + step;
    input.value = value < 1 ? 1 : value;
}
