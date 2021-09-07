export const percentage = function (a, b) {
    let res = a * b / 100;
    return Number(res.toFixed(2))
};

export const getSGST = function (a) {
    return percentage(a, 9);
};

export const getCGST = function (a) {
    return percentage(a, 9);
};

export const getIGST = function (a) {
    return getSGST(a) + getCGST(a);
};

export const getDiscountAmount = function (a, b) {
    return a - percentage(a, b);
};

export const printBill = function (a) {
    console.log("SGST:", getSGST(a));
    console.log("CGST:", getCGST(a));
    console.log("IGST:", getIGST(a));
    console.log("Grand Total:", a + getIGST(a));
};

export const printDiscountBill = function (p) {
    let a = p.price;
    let b = p.discount;
    console.log("Name:", p.name);
    console.log("In Stock:", p.stock);
    console.log("Amount:", a);
    console.log("Discount:", b, '%');

    let amount = getDiscountAmount(a, b);
    console.log("Discount Amount", amount);

    printBill(amount);

};
