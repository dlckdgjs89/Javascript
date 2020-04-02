var desc = document.querySelector('#desc');
var open = document.querySelector('#open');


function showDetail(){
    desc.style.display = "block";
    open.style.display = "none";
}

function hideDetail(){
    desc.style.display = "none";
    open.style.display = "block";
}