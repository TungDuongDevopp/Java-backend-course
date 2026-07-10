let a,b;
do{
    a = parseInt(prompt("Mời bạn nhập 1 số nguyên dương  a bất kỳ "));
    b = parseInt(prompt("Mời bạn nhập 1 số nguyên dương  b bất kỳ "));
}while (a<=0 || a>=b )
let sumOdd = 0;
let sumEven = 0;
for(i = a;i<=b;i++){
    if(i % 2 == 0) sumEven+=i;
    else sumOdd+=i;
}
console.log(`Tổng các số lẻ trong khoảng ${a} đến ${b}: ${sumOdd}`);
console.log(`Tổng các số chẵn trong khoảng ${a} đến ${b}: ${sumEven}`);