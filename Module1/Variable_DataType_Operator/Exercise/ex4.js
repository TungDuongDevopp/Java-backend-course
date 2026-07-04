//Bài 4
//Thực hiện nhập chiều dài
let length =parseFloat(prompt("Moi bạn nhập chiều dài hcn"));

//Thực hiện nhập chiều rộng
let width = parseFloat(prompt("Mời bạn nhập chiều rộng hcn"));

// Thực hiện tính diện tích
let area = length * width;

//Thưc hiện tính chu vi
let perimeter = (length + width) / 2;

//Tiến hành in kết quả ra màn hình
console.log(`Chu vi hình chữ nhật là :${perimeter}`);
console.log(`Diện tích hình chữ nhật là :${area}`);
