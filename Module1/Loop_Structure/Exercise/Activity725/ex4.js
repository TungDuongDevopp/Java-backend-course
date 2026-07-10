let height;
let width;
do{
     height = parseInt(prompt("Mời nhập chiều cao hcn"))
     width = parseInt(prompt("Mời nhập chiều rộng hcn"))
}while (height<=0||width<=0)

console.log('*'.repeat(width));
for(let i = 1;i<=height-2;i++){

    console.log('*'+' '.repeat(width-2)+'*')
}
if (height > 1) {
    console.log('*'.repeat(width));
}