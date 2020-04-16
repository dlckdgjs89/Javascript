var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");

for(var i=0; i<smallPic.length; i++) {
    smallPic[i].onclick = showBic;
}

function showBic(){
    // console.log(this.src);
    bigPic.src = this.src;
}