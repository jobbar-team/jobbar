	

function toggleMenu() {
	var menuBox = document.getElementById('menu-box');
	var icon_X = document.getElementsByClassName("fa fa-times")[0];
    menuBox.style.display = "block";
    icon_X.style.display = "block";
  }
function closeNavBar(){ 
	var menuBox = document.getElementById('menu-box');
	var icon_X = document.getElementsByClassName("fa fa-times")[0];
  	icon_X.style.display = "none";
  	menuBox.style.display = "none";
 }