// Nhập vào số a
let a = parseFloat(prompt("Mời bạn nhập vào giá trị a"));

// Nhập vào số b
let b = parseFloat(prompt("Mời bạn nhập vào giá trị b"));

// Nhập vào số c
let c = parseFloat(prompt("Mời bạn nhập vào giá trị c"));

if(a>=b && a>=c) console.log(a);
else if(b>=a && b>=c) console.log(b);
else console.log(c);