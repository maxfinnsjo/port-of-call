//Menu script 
function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	myMenu.classList.toggle("menu--visible");
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);
//!Menu script