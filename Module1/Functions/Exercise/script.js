
//Khai báo 1 biến toàn cục
let intro = "This Program belongs to Duong";

let number;
number = parseInt(prompt("Mời nhập 1 số  nguyên dương bất kỳ: "));
console.log(`${number} là số chẵn: ${isEven(number)}`);
console.log(`${number}! = ${factorial(number)}`);

let nums = [7,1,8,6,3,12,34,26];
console.log(`Số lớn nhất trong mảng [${nums.toString()}] là: ${findMax(nums)}`);

let str = "Learn JavaScript with Duong!";
console.log(`Số nguyên âm trong chuỗi : ${countVowels(str)}`);

printTable(number);

console.log(`Số fibo thứ ${number} là ${FiboN(number)}`);

let weight,height;
height= parseFloat(prompt("Mời bạn nhập chiều cao: "));
weight = parseFloat(prompt("Mời bạn nhập cân nặng: "));
console.log("BMI của bạn là: ",calculateBMI(height,weight));

// Thử lấy biến current của hàm fibo xem kết quả
//console.log(current); // Hiện lỗi is not undefined => bên ngoài không thể lấy giá trị của biến bên trong hàm muốn lấy biến current phải thông qua hàm

//Hàm kiểm tra số chẵn
function isEven(number){
    return number % 2 == 0;
}

// Hàm tính giai thừa
function factorial(n){
    let gt = 1;
    for(let i = 1;i<=n;i++){
        gt*=i;
    }
    return gt;
}

// Hàm tìm phần tử lớn nhất của mảng
function findMax(arr){
    let max = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}

// Hàm đếm nguyên âm
function countVowels(str){
    let count = 0;
    for(let c of str){
        if(isVowel(c)) {
            count++;
        }
    }
    return count;
}

// Hàm kiểm tra nguyên âm
function isVowel(chr){
    return (chr == 'o'|| chr == 'e' || chr == 'i' || chr == 'u' || chr == 'a');
}

// Hàm in bảng cửu chương
 function printTable(n){
    // console.log(current);// Thử lấy biến current thừ hàm FiboN => Hiện lỗi
    console.log("Bảng cửu chương của ",n);
    for(let i = 1; i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
 }

 // Viết hàm tính số fibo thứ n
function FiboN(fibo){
    if(fibo == 0) return 0;
    if(fibo == 1) return 1;
    let fibo0 = 0; // Số Fibonacci thứ 0
    let fibo1 = 1; // Số Fibonacci thứ 1
    let current = 0;

    // Tính từ số thứ 2 đến số thứ n
    for (let i = 2; i < fibo; i++) {
        current = fibo0 + fibo1;
        fibo0 = fibo1;
        fibo1 = current;
    }
    console.log(intro); // In biến intro từ bên ngoài
    return current;
}

//Viết hàm tính BMI
 function  calculateBMI(height,weight){
     return (weight / (height * height)).toFixed(1);
}