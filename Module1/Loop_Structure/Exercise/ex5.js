let number;
do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while (number<=0)
//Khai báo biến tính tổng
let sum = 0;
for (i = 1;i<=number;i++){
    sum+=1/Math.pow(i,3);
}

console.log(sum);