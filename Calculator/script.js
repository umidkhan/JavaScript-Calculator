let a = +prompt("Birinchi sonni kiriting: ")
let b = +prompt("Ikkinchi sonni kiriting: ")
let c = prompt("Amalni kiriting + - * /")

if (c == "+") {
    console.log("Natija: " ,a + b);
}
else if (c == "-") {
    console.log("Natija: " , a - b);
}
else if (c == "*") {
    console.log("Natija: " , a * b);
}
else if (c == "/") {
    console.log("Natija: " , a / b);
}
else{
    alert("Xato!!!")
    console.log("Nimadir xato ketti? Qayta urining");
}