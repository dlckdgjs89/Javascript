// 현재 날짜
var now = new Date();

// 처음 만난 날
var firstDay = new Date('2019-11-18');

// 밀리초로 변경
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

// 1일 = 24시간 * 60분 * 60초 * 1000밀리초
var passedDay = Math.round(passedTime/(24 * 60 * 60 * 1000));

//함수
function calculator(days) {
    var future = toFirst + days * (24 * 60 * 60 * 1000);
    var someday = new Date(future);
    
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();

    document.querySelector('#date'+days).innerHTML =
    year + "년 " + month + "월 " + date + "일";    
}


// console.log(toNow);
console.log(toFirst);
// console.log(toFirst + 100);
// console.log(PassedTime);
console.log(passedDay);

// 입사한 지
document.querySelector('#accent').innerHTML = 
    passedDay + "일";

// 100일
// document.querySelector('#date100').innerHTML =
//     year + "년 " + month + "월 " + date + "일";

calculator(100);
calculator(180);
calculator(365);
calculator(500);