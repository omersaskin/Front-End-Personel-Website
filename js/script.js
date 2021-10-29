// RESPONSİVE MENU
function responsiveMenu() {
	var x = document.getElementById("topnavID");
	if (x.className === "topnav") {
		x.className += " responsive";
		document.getElementById("bar").style.display = "15px 10px";
		document.getElementById("bar").style.display = "none";
		document.getElementById("close").style.display = "block";
	} else {
		x.className = "topnav";
		document.getElementById("close").style.display = "15px 10px";
		document.getElementById("close").style.display = "none";
		document.getElementById("bar").style.display = "block";
	}
}

//SHRINK MENU

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("topnavID").style.padding = "15px 10px";
		document.getElementById("logo").style.fontSize = "25px";
	} else {
		document.getElementById("topnavID").style.padding = "40px 10px";
		document.getElementById("logo").style.fontSize = "35px";
	}
}

//SCROLL POSITION TO CHANGE MAKE HOVER MENU LINK COLOR

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120 && wn<680){
    	$(".topnav .linkI").css("color","#fff");
    } else {
    	$(".topnav .linkI").css("color","#EFD522");
    }

    if(wn > 680 && wn<1480){
    	$(".topnav .linkU").css("color","#fff");
    } else {
    	$(".topnav .linkU").css("color","#EFD522");
    }

    if(wn > 1480 && wn<2080){
    	$(".topnav .linkD").css("color","#fff");
    } else {
    	$(".topnav .linkD").css("color","#EFD522");
    }

    if(wn > 2080 && wn<3080){
        $(".topnav .linkBe").css("color","#fff");
    } else {
        $(".topnav .linkBe").css("color","#EFD522");
    }  });
});
