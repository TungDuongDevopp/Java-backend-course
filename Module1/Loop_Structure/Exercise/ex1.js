let number;

do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while (number<=0)
for( i = 1;i<=20; i++){
    console.log(number*i);
}