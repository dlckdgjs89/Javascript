console.log(sumMulti(5, 10));
console.log(sumMulti(10, 10));

function sumMulti(a, b){
    if(a === b) {
        return a*b;
    } else {
        return a+b;
    }
}

// 숫자를 받아서 화면에 표시하면 왜 문자로 인식할까?.........
