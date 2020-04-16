var userId = document.querySelector("#user-id");
userId.onchange = checkId;

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15 ){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        // userId.value = "";
        userId.select(); // 내장함수, 다시 입력할 수 있도록 userId 필드 선택해줌
    } 
}