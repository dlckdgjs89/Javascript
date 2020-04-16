var nameInfo = document.querySelector("#billingName");
var tellInfo = document.querySelector("#billingTel");
var addrInfo = document.querySelector("#billingAddr");

var shippingName = document.querySelector("#shippingName");
var shippingTel = document.querySelector("#shippingTel");
var shippingAddr = document.querySelector("#shippingAddr");

var check = document.querySelector("#shippingInfo");

check.addEventListener("click", checkBox);
function checkBox() {
    if(check.checked === true) {
        shippingName.value = nameInfo.value;
        shippingTel.value = tellInfo.value;
        shippingAddr.value = addrInfo.value;
    } else {
        shippingName.value ="";
        shippingTel.value ="";
        shippingAddr.value = "";
    }
}