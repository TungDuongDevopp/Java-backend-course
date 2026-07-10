let number;
let gt = 1;
do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while (isNaN(number)&&number<=0)
for( i = 1;i<=number; i++){
    gt*= i;
}
console.log(`${number}! = ${gt}`);