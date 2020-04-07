var now = new Date();
var firstDay = new Date('2019-11-18');

var toNow = now.getTime();
var toFirst = firstDay.getTime();

var toPassedDay = toNow - toFirst;
var passedDay = Math.round(toPassedDay/(24*60*60*1000));

console.log(passedDay);

document.querySelector('#accent').innerHTML = 
    passedDay + "일";

function calculator(days) {
    var future = toFirst + days * (24*60*60*1000);
    var someday = new Date(future);

    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();

    document.querySelector('#date'+days).innerHTML =
        year + "년 "+ month + "월 "+ date + "일";
}

calculator(100);
calculator(200);
calculator(365);
calculator(500);