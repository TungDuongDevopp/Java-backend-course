//Bài 2 cơ bản
// Nhập tên người dùng
let name = prompt("Mời bạn nhập tên");;

//In ra màn hình
document.writeln(`Tên bạn vừa nhập là: ${name}`);

//Bài 2 Nâng cao
//Viết hàm tính tổng
function Sum(){

    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    let result = a + b;
    document.getElementById("result").innerText = result;
}
