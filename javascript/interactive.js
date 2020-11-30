window.addEventListener("resize", function(e) {
    if (window.innerWidth < 800) {
        var color = 254 -  (window.innerWidth/800)*80;
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgb(157, 123, " + String(color) + ")"
    }
});