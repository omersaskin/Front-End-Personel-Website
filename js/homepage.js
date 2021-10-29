$(document).ready(function() {
	$(document.body).on("click", "#btn1", function(){
		var comment = $('.commentBox').val();
		var commentLength = $('.commentBox').val().length;

		if (commentLength > 80) {
			$('.commentBox').val("");
		  	var i = 5;

			var k = Math.floor(Math.random() * 100001);
			var j = Math.floor(Math.random() * 100001);
			var d = Math.floor(Math.random() * 100001);

			$('<button>').text("Yorumu Kaldır").addClass("buttonStil").attr('id', k).attr('onclick','reply_click(this.id, '+j+', '+d+')').prependTo('.comments');
			$('<p>').text(comment).attr("id", j).prependTo('.comments');
			$('<span>').attr("id", d).addClass("bosluk").prependTo('.comments');
		     var none = document.getElementById("uyariNone");
		     none.style.display="none";	
		     var noneN = document.getElementById("uyari");
		     noneN.style.display="none";		        
		}
		else if (commentLength < 80) {
		     document.getElementById("uyari").innerHTML = "Lütfen en az 80 karakter girin!";
		     var noneN = document.getElementById("uyari");
		     noneN.style.display="block";	
		} 
	});
});

function reply_click(clicked_id, j, d)
{
	var m = Math.floor(Math.random() * 101);
	var n = Math.floor(Math.random() * 101);
	var r = Math.floor(Math.random() * 101);
	var element = document.getElementById(clicked_id);
	var elementt = document.getElementById(j);
	var elementtt = document.getElementById(d);
	element.id = m;
	elementt.id = n;
	elementtt.id = r;
	$("#" + m).remove();
	$("#" + n).remove();
	$("#" + r).remove();
}