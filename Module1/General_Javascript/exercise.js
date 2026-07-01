// Bài 1

let hoTen ="Dương";
let tuoi = 22;

console.log(`Tên: ${hoTen}, Tuổi: ${tuoi}`);

// Bài 2
let  a = 10;
let b = 5;
let sum = a+b;
//Hiển thị bằng console.log
console.log(`Tổng của hai số ${a} và ${b} là: ${sum}`);

//Hiển thị bằng document.writeln
document.writeln(`Tổng của hai số ${a} và ${b} là: ${sum}`);

//Hiển thị bằng alert
alert(`Tổng của hai số ${a} và ${b} là: ${sum}`);

// Bài 3
document.writeln("<br>");

let c = 20;
let d = 15;

let result = a + b * c - d/2;

console.log(`Kết quả của phép tính ${a} + ${b} * ${c} - ${d}/2 là: ${result}`);

//Hiển thị bằng document.writeln
document.writeln(`Kết quả của phép tính ${a} + ${b} * ${c} - ${d}/2 là: ${result}`);

//Hiển thị bằng alert
alert(`Kết quả của phép tính ${a} + ${b} * ${c} - ${d}/2 là: ${result}`);


//Bài 4
function Sum(){
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    let sum = numA + numB;
    document.getElementById("result").innerText = sum;
}