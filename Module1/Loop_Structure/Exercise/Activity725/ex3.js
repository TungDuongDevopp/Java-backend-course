
let number;

do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while ( isNaN(number) && number<=0)
for (let i = 1; i <= number; i++) {
    console.log('*'.repeat(i));
}

for (let i = number; i >= 1; i--) {
    console.log('*'.repeat(i));
}

for (let i = 1; i <= number; i++) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
}

for (let i = number; i >=1; i--) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
}