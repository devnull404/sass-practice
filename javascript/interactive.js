window.addEventListener("scroll", function(e) {
    var color = 254 -  (window.scrollY/(document.body.scrollHeight-window.screen.height))*254;
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgb(157, 123, " + String(color) + ")"
});