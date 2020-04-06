var now = new Date();
var firstDay = new Date('2019-11-18');

var toNow = now.getTime();
var toFirst = firstDay.getTime();

var toPassedDay = toNow - toFirst;
var passedDay = Math.round(toPassedDay/(24*60*60*1000));

console.log(passedDay);

document.querySelector('#accent').innerHTML = 
    passedDay + "일";