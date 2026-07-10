
let number
do{
    number= parseInt(prompt("Mời bạn nhập số nguyên dương n"));
} while (isNaN(number)&&number<=0)
let count = 0;
console.log("Dùng hàm kiểm tra số nguyên tố");
for(let i = 2;i<=number;i++){
    if(isPrime(i)) {
        count++;
        console.log(i);
    }
}
console.log("Tổng số nguyên tố là : ",count);
console.log("Dùng thuật toán sàng Eratosthenes");
let primes = sangEratosthenes(number);

for(let prime of primes){
    console.log(prime);
}
console.log(`Tổng số nguyên tố là: ${primes.length} `)

function isPrime(n){

    if(n<2) return false;
    if(n==2) return true;
    if (n % 2 === 0) return false;
    for(let i = 3; i*i<=n;i+=2){
        if(n % i ===0) return false;
    }
    return true;
}
function sangEratosthenes(n){
    //Đánh dấu tất cả các số từ 0 -> n đều là số nguyên tố
    let arr = new Array(n+1).fill(true);

    // Số 0,1 không phải là số nguyên tố
    arr[0] = false;
    arr[1] = false;
    for(let i =2;i*i<=n;i++){
        if(arr[i]==true){
            for(let j = i*i;j<=n;j+=i){
                arr[j] = false;
            }
        }
    }
    let prime =[];
    for(let i=2;i<=n;i++){
        if(arr[i]) prime.push(i);
    }
    return prime;
}

