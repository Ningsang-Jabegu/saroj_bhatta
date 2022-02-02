document.getElementById("order-btn")
.addEventListener ("click", function() {
    document.getElementsByClassName("popup-login")
    [0].classList.add("active");
});

document.getElementById("dismiss-popup-button")
.addEventListener ("click", function() {
    document.getElementsByClassName("popup-login")
    [0].classList.remove("active");
});