document.getElementById("search").addEventListener("keyup", function(e){
    if (e.key == "Enter") {
        window.open("https://shorturl.at/cflGW", '_blank')
    }
});

document.getElementsByTagName("div")[0].children[1].addEventListener("click", function(e){
    window.open("https://shorturl.at/cflGW", '_blank')
});