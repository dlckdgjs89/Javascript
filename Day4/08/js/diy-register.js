function newRegister(){
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
        removeBtn[i].onclick = remove;
    }

    function remove(){
        // console.log(this);
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

}