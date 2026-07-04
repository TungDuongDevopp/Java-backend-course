
//Bài 4
function Sum(){
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    let sum = numA + numB;
    document.getElementById("result").innerText = sum;
}