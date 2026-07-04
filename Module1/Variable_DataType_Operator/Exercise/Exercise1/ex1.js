// Bài 1 : Kết quả kỳ vọng : 92.16666666666667
 let expression = 10 * (2 + '3') - '30' + 20 / '5' - 1 - ('11' + 5 / '6');

// Áp dụng quy tắc nhân chia trước cộng trừ sau , trong ngoặc trước ngoài ngoặc sau

// Chia biểu thức thành các cụm nhỏ hơn
let k1 = 10 * (2 + '3') -'30';
let k2 = 20 / '5' - 1;
let k3 = - ('11' + 5 / '6');

// Thực hiện tính cụm 1:10 * (2 + '3') -'30'
console.log(2+'3')  // Kết quả sẽ là '23' do chuỗi luôn được ưu tiên vs phép cộng
console.log(10*'23')// Kết quả sẽ là 10*23 = 230 do ngoại trừ dấu cộng, các dấu khác sẽ được chuyển đổi ngầm định từ kiểu chuỗi sang số
console.log(230 - '30') // Kết quả sẽ là 230-30=200  do đã nói ở trên

// Vậy kết quả cụm 1 = 200

//Thực hiện đối chiếu kết quả cụm k1
console.log(`${k1} có bằng 200 không? ${k1==200}`);


//Thực hiện tính kết quả cụm 2: 20 / '5' - 1;
console.log(20 / '5') // Kết quả sẽ là 20/5 = 4 theo quy tắc trên
console.log(4-1) // Kết quả hiển nhiên = 3
//Vậy kết quả cụm 2 = 3
//Thực hiện đối chiếu kết quả cụm k2
console.log(`${k2} có bằng 3 không? ${k2==3}`);

//Thực hiện tính kết quả cụm 3: - ('11' + 5 / '6');
console.log(5/'6') //Kết quả bằng 5/6 =  0.8333333333333334
console.log('11' + 0.8333333333333334) //kết quả '110.8333333333333334'
console.log(-'110.8333333333333334') // Kết quả -110.8333333333333334

//Thực hiện đối chiếu kết quả cụm k2
console.log(`${k3} có bằng -110.8333333333333334 không? ${k3==-110.8333333333333334}`);

// Kết quả bằng : Cụm 1 + Cụm 2 + Cụm 3 = 200 + 3 -110.833333333 = 92.16666666666667   đúng kết quả

// so sánh kết quả
console.log(`${expression} có bằng 92.16666666666667 không? ${expression==92.16666666666667}`);





