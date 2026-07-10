const n = 6;

// 1. VẼ PHẦN TRÊN (2 cái tai của trái tim)
for (let i = n / 2; i <= n; i += 2) {
    let row = "";

    // Khoảng trống phía trước tai bên trái
    row += " ".repeat(n - i);

    // Tai bên trái
    row += "*".repeat(i);

    // Khoảng trống ở giữa 2 tai
    row += " ".repeat(n - i);

    // Tai bên phải
    row += "*".repeat(i);

    console.log(row);
}

// 2. VẼ PHẦN DƯỚI (Hình tam giác ngược nhọn dần)
for (let i = n; i >= 1; i--) {
    let row = "";

    // Khoảng trống tạo độ dốc đi vào
    row += " ".repeat(n - i);

    // Các dấu sao nhọn dần (giảm 2 sao mỗi hàng để tạo góc nhọn)
    row += "*".repeat(2 * i - 1);

    console.log(row);
}
