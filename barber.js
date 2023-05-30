/*<script>*/
var menu_button = document.getElementById("menu_button")
var side_nav = document.getElementById("side_nav")
var menu = document.getElementById("menu")

side_nav.style.right = "-250px";

menu_button.onclick = function(){
    if (side_nav.style.right == "-250px"){
        side_nav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        side_nav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});
/*</script>*/