let num1 = parseInt(prompt("첫 번째 숫자는?"));
let num2 = parseInt(prompt("두 번째 숫자는?"));

abc(num1, num2);

function abc(a, b){
    if(a > b) {
        alert(a + "(이)가 " + b + "보다 큽니다.");
    } else if (a < b) {
        alert(a + "(이)가 " + b + "보다 작습니다..");
    } else {
        alert(a + "(이)가 " + b + "와 같습니다.");
    }
}