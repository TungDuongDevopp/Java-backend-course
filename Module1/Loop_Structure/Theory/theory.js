// In số lẻ từ 10-> 30
for(let i =10;i<=30;i++){
    if(i%2!==0) console.log(i);
}
// In các số chạy từ 10-> 1
for(let i = 10;i>0;i--){
    console.log(i);
}
let count = 0;
// Đếm số chẵn 1-> 100
for(let i = 2;i<=100;i+=2){
    count++;
}
console.log(`Có tất cả ${count} số chẵn trong khoảng 1->100`);

let multiple = 1;
let num;
while(multiple % 7 !=0){
   num = parseInt(prompt("Mời bạn nhập 1 số bất kỳ"));
    sum*=num;
}

console.log("============My Menu=============");
console.log("1. Thêm sản phẩm");
console.log("2. Xóa sản phẩm");
console.log("0. Thoát");

let choice; // Khai báo biến bên ngoài vòng lặp

do {
    choice = parseInt(prompt("Mời bạn nhập lựa chọn:"));

    if (choice === 1) {
        console.log("Bạn đã chọn: Thêm sản phẩm");
    } else if (choice === 2) {
        console.log("Bạn đã chọn xóa sản phẩm");
    } else if (choice === 0) {
        console.log("Bạn đã chọn thoát");
    } else {
        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

} while (choice !== 0);
