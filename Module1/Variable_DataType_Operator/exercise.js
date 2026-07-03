// Bài 1 : Kết quả kỳ vọng : 92.16666666666667
 let expression = 10 * (2 + '3') - '30' + 20 / '5' - 1 - ('11' + 5 / '6');

// Áp dụng quy tắc nhân chia trước cộng trừ sau , trong ngoặc trước ngoài ngoặc sau
/* Ta chia thành các cụm như sau
Cụm 1: 10 * (2 + '3') -'30'
Cụm 2: 20 / '5' - 1
Cụm 3: - ('11' + 5 / '6');
=> result = Cụm 1 + Cụm 2 + Cụm 3
*/
/* Thực hiện đúng quy tắc ta có
Cụm 1:
 (2 + '3')  = '23'
 10 * '23' = 10 * 23 = 230
 230 - '30' = 230 -30 = 200;
=> Kết quả cụm 1 : 200
*/

/* Thực hiện đúng quy tắc ta có
Cụm 2:
 20 / '5' = 20/5 = 4
 4 - 1 = 3
=> Kết quả cụm 2 : 3
*/

/* Thực hiện đúng quy tắc ta có
Cụm 3:
 5 / '6' = 5 / 6 = 0.833333333
 '11' + 0.833333333 = '110.833333333'
 -'110.833333333' = 110.833333333
=> Kết quả cụm 3: -110.833333333
*/
// Kết quả bằng : Cụm 1 + Cụm 2 + Cụm 3 = 200 + 3 -110.833333333 = 92.1666667  đúng kết quả

//Bài 2
let name;
name = prompt("Mời bạn nhập tên");
document.writeln(`Tên bạn vừa nhập là: ${name}`);

//Viết hàm tính tổng
function Sum(){

     let a = parseFloat(document.getElementById("numA").value);
     let b = parseFloat(document.getElementById("numB").value);
    let result = a + b;
    document.getElementById("result").innerText = result;
}

// Bài 3
 let a = parseFloat(prompt("Vui lòng nhập số a: "));
 let b = parseFloat(prompt("Vui lòng nhập số b: "));

 let kq;
 if(a===b) kq = `${a} bằng ${b}`;

 else{
     if(a>b) kq = `${a} lớn hơn ${b}`;
     else{
         kq = `${a} nhỏ hơn ${b}`;
     }
 }
 document.getElementById("a").innerText = a;
 document.getElementById("b").innerText = b;
 document.getElementById("ketqua").innerText = kq;

//Bài 4
let length =parseFloat(prompt("Moi bạn nhập chiều dài hcn"));
let width = parseFloat(prompt("Mời bạn nhập chiều rộng hcn"));
let area = length * width;
let perimeter = (length + width) / 2;
console.log(`Chu vi hình chữ nhật là :${perimeter}`);
console.log(`Diện tích hình chữ nhật là :${area}`);
