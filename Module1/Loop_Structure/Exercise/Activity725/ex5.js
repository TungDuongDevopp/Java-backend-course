let money, rate, month;

// 1. Check số tiền gốc (phải >= 0)
do {
    money = parseFloat(prompt("Mời nhập số tiền gốc ban đầu (VNĐ):"));
} while (isNaN(money) || money < 0);

// 2. Check lãi suất năm (phải >= 0, ví dụ nhập 6 cho 6%)
do {
    rate = parseFloat(prompt("Mời nhập lãi suất tháng (%):"));
} while (isNaN(rate) || rate < 0);

// 3. Check số tháng gửi (phải là số nguyên >= 0)
do {
    month = parseInt(prompt("Mời nhập số tháng gửi:"));
} while (isNaN(month) || month < 0);
// Chuẩn hóa từ % về số thâp phân
rate = rate/100;

let totalMoney = calcMoney(money,month,rate);
console.log(totalMoney);

function calcMoney (money,month,rate){

    while(month>0){
        money+=money*rate;
        month--;
    }
    return money;
}