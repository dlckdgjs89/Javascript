var userId = document.querySelector("#user-id");
var passwd1 = document.querySelector("#user-pw1");
var passwd2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
passwd1.onchange = checkPw;
passwd2.onchange = comparePw;

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15 ){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        // userId.value = "";
        userId.select(); // 내장함수, 다시 입력할 수 있도록 userId 필드 선택해줌
    } 
}

function checkPw(){
    if(passwd1.value.length <= 8) {
        alert("8자리 이상의 비밀번호를 사용하세요.");
        passwd1.value = "";
        passwd1.focus();
    } 
}

function comparePw(){
    if(passwd1.value !== passwd2.value) {
        alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        passwd2.value ="";
        passwd2.focus();
    }
}

