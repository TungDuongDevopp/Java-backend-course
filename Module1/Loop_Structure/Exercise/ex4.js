let number;
do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while (isNaN(number)&&number<=0)
//Khai báo biến tính tổng
let sum = 0;
for (i = 1;i<=number;i++){
    sum+=i*(i+1);
}

console.log(sum);