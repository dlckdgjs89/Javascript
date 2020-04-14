var newP = document.createElement("p");
var newText = document.createTextNode("주문이 완료되었습니다.");
var attr = document.createAttribute("class");
attr.value = "accent";


// 요소노드 <-> 텍스트노드 연결
newP.appendChild(newText);

// 바디 <-> 요소노드 연결
document.body.appendChild(newP);

// 요소노드 <-> 속성노드 연결
newP.setAttributeNode(attr);



// var easys = document.createAttribute("id");
// easys.value = "doit_js";
