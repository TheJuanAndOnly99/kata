const num = 8

// create an array with each number from 1 to num
const numbers = [];
for (let i = 1; i <= num; i++) {
  numbers.push(i);
}

const length = numbers.length;

function generatePassword(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(generatePassword(length));