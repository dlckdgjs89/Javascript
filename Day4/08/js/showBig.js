let pic1 = document.querySelector("#cup");
let pic2 = document.querySelectorAll(".small");

for(var i=0; i<pic2.length; i++) {
    pic2[i].onclick = showBic;
}

function showBic() {
    // console.log(this);
    var newPic = this.src;
    pic1.setAttribute("src", newPic);
    // pic1.src = this.src;
}