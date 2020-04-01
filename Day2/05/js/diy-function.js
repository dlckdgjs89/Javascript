//var num1 = Number(prompt("숫자를 입력하세요."));
//var num2 = Number(prompt("숫자를 입력하세요."));

var num1 = parseInt(prompt("숫자를 입력하세요."));
var num2 = parseInt(prompt("숫자를 입력하세요."));

var result = add(num1, num2);
document.write(num1 + " + " + num2 + " = " + result);

function add(a, b) {
    sum = a + b;
    return sum;
}

