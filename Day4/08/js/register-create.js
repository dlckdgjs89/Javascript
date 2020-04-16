function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var nameList = document.querySelector("#nameList");
    // nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]);
    userName.value = "";

    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    var removeBtn = document.querySelectorAll(".del");
    for(var i=0; i<removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", function(){
            // console.log(this); // <span>X</span>
            // console.log(this.parentNode); // <p>X누른 해당 text </p>
            // console.log(this.parentNode.parentNode); // <div id="nameList">
            
            // console.log(Boolean(this.parentNode.parentNode)); // 부모노드가 있으면 true, 없으면 false
            if(this.parentNode.parentNode) { // 현재 노드의 부모 부모노드가 있을경우, -> 이해잘안됨
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
            // div 태그에서 p태그를 삭제해줘야함..
        });
    }
}