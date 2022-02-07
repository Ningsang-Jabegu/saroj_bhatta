/*document.getElementById("order-btn")
.addEventListener ("click", function() {
    document.getElementsByClassName("popup-login")
    [0].classList.add("active");
});

document.getElementById("dismiss-popup-button")
.addEventListener ("click", function() {
    document.getElementsByClassName("popup-login")
    [0].classList.remove("active");
});*/

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}