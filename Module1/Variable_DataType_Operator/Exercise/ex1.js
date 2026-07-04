// Bài 1 — Tính biểu thức hỗn hợp
// Biểu thức gốc: 10 * (2 + '3') - '30' + 20 / '5' - 1 - ('11' + 5 / '6')

// Bước 1: Tính toán trong các dấu ngoặc đơn trước.
// Ngoặc đơn thứ nhất: (2 + '3')
// Toán tử + gặp một chuỗi '3' sẽ thực hiện nối chuỗi. Số 2 biến thành '2'.
// '2' + '3' = '23'
// Ngoặc đơn thứ hai: ('11' + 5 / '6')
// Tính phép chia trước: 5 / '6'. Toán tử / ép chuỗi '6' thành số 6. 5 / 6 = 0.8333333333333334
// Tiếp theo thực hiện phép cộng: '11' + 0.8333333333333334
// Toán tử + gặp chuỗi '11' nên tiếp tục nối chuỗi thành: '110.83333333333334'

// Biểu thức sau Bước 1: 10 * '23' - '30' + 20 / '5' - 1 - '110.83333333333334'

// Bước 2: Thực hiện các phép tính nhân (*) và chia (/) từ trái qua phải.
// Phép nhân: 10 * '23'. Toán tử * ép chuỗi '23' thành số 23. 10 * 23 = 230
// Phép chia: 20 / '5'. Toán tử / ép chuỗi '5' thành số 5. 20 / 5 = 4

// Biểu thức sau Bước 2: 230 - '30' + 4 - 1 - '110.83333333333334'

// Bước 3: Thực hiện các phép tính cộng (+) và trừ (-) từ trái qua phải.
// Phép trừ 1: 230 - '30'. Toán tử - ép chuỗi '30' thành số 30. 230 - 30 = 200
// Phép cộng: 200 + 4. Hai số hạng đều là Number. 200 + 4 = 204
// Phép trừ 2: 204 - 1 = 203
// Phép trừ cuối: 203 - '110.83333333333334'
// Toán tử - ép chuỗi thành số: 203 - 110.83333333333334 = 92.16666666666666

const result = 10 * (2 + '3') - '30' + 20 / '5' - 1 - ('11' + 5 / '6');

// In kết quả ra màn hình console để kiểm tra
console.log("Giá trị của biểu thức là:", result);
// Kết quả hiển thị: 92.16666666666666
