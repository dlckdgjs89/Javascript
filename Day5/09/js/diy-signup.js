var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");



function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리 사이의 ID값을 입력해주세요.");
        userId.select();
    } 
}

function checkPw() {
    if(pw1.value.length <= 8 ) {
        alert("8자리 이상의 비밀번호를 입력해주세요.");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if(pw1.value !== pw2.value ) {
        alert("비밀번호가 일치하지 않습니다 다시 입력해주세요.");
        pw2.value ="";
        pw2.focus();
    }
}