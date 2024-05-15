const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let amountArrItem = data.length;

for (let i = 0; i < data.length; i++) {
    result[i] = data[amountArrItem - 1];
    amountArrItem -= 1;
}

console.log(result);
