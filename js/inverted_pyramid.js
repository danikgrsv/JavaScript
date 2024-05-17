const lines = 5;
let result = '';
let number = 11;

for (let i = 0; i <= lines; i++) {
    for (let k = 0; k != i; k++) {
        result += ' ';
    }
    for (let j = 1; j <= number - i * 2; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
