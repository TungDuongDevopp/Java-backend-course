let sentences;
let countWord = 0;
sentences = prompt("Mời bạn nhập 1 câu bất kỳ");

// Bỏ khoảng trắng đầu và cuối chuỗi
sentences = sentences.trim();
// Nếu câu sau khi trim không rỗng chắc chắn có ít nhất 1 từ
if(sentences.length>0) countWord = 1;
// Nếu gặp khoảng trắng và ký tự tiếp theo khác khoảng trắng mới tính 1 từ
for(i = 0; i<sentences.length;i++){
    if(sentences[i] === " " && sentences[i+1] !== " "){
        countWord++;
    }
}

console.log(`Số từ: ${countWord}`);
console.log(`Số ký tự: ${sentences.length}`);

