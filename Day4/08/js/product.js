var isOpen = false;
var view = document.querySelector("#view");

view.addEventListener("click", show);

function show() {
    if(isOpen === false) {
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    } else {
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
}


