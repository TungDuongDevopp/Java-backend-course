// Cấu trúc điều kiện
// If -else if .... else hoạt động theo cách sau: Nếu A thì, Nếu B thì , còn lại thì

// Ví dụ kiểm tra tuổi hợp lệ khi đi xem phim ( dùng if else)
let age = 18;
if(age>= 18) console.log("Bạn được vào xem phim");
else console.log("Bạn không được vào");

// Kiểm tra với nhiều điều kiện ( dùng if -  else if - else)
// Ví dụ kiểm tra điểm
let grade = 6;
if(grade>= 8 && grade<=10) console.log("Bạn được xếp hạng giỏi");
else if(grade>=7 && grade < 8)  console.log("Bạn được xếp hạng khá");
else if(grade>=5 && grade < 7) console.log("Bạn được xếp hạng trung bình");
else if(grade>3 && grade < 5) console.log("Bạn được xếp hạng kém");
else console.log("Bạn được xếp hạng yếu");

// Toán tử ba ngôi Điều kiện ? true : false

let ketqua = "";
ketqua = (grade > 5)? "Đậu" : "Trượt";
console.log(ketqua);