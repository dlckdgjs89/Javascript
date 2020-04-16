var selectMenu = document.testForm.major;

function displaySelect(){
    var selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert("["+ selectText +"] 를 선택했습니다.");
}