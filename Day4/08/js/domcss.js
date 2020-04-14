var myRect = document.querySelector("#rect");
myRect.addEventListener("mouseover", function() {
    myRect.style.backgroundColor = "green";
    myRect.style.borderRadius = "50%";
});

myRect.addEventListener("mouseout", function() {
    myRect.style.backgroundColor = "";
    myRect.style.borderRadius = "";
});