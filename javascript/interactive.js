window.addEventListener("resize", function(e) {
    if (window.innerWidth < 1100) {
        var color = 254 -  (window.innerWidth/1100)*80;
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgb(157, 123, " + String(color) + ")"
    }
    if (window.innerWidth >= 1100) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgb(157, 123, 152)"
    }
});