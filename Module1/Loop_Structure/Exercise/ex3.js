let number;
do{
    number = parseInt(prompt("Mời bạn nhập 1 số nguyên dương bất kỳ "));
}while (isNaN(number)&&number<=0)

let f0 = 0;
let f1 = 1;
let fn = 1; // Khởi đầu fn từ số tiếp theo

// In trước các số đầu tiên nếu hợp lệ
if (number >= 0) console.log(0);
if (number > 0) console.log(1);

while (true) {
    fn = f0 + f1;

    // Nếu số tiếp theo lớn hơn hoặc bằng number thì dừng ngay, KHÔNG IN
    if (fn >= number) {
        break;
    }

    console.log(fn); // Chắc chắn nhỏ hơn number mới được in ở đây

    // Cuộn biến tiến lên
    f0 = f1;
    f1 = fn;
}
