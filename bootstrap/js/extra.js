function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

//http://stackoverflow.com/questions/18575582/how-to-detect-responsive-breakpoints-of-twitter-bootstrap-3-using-javascript
var waitForFinalEvent=function(){
	var b={};return function(c,d,a){a||(a="I am a banana!");
	b[a]&&clearTimeout(b[a]);b[a]=setTimeout(c,d)}}();

var fullDateString = new Date();

function checkSizes() {

    if (isBreakpoint("xs")) { // version with navbar collapsed
		$("#my_photo").css("margin", "20px 0px");
		$(".modal-dialog").css("width", "");
		$(".small_space").addClass("space");
		
	} else { // version with full navbar
		$("#my_photo").css("margin", "0px");
		$(".modal-dialog").css("width", "800px");
		$(".small_space").removeClass("space");
	}

	if ($("#main_logos").width() * 1.7 > $("#about_me p").width()) {
		$("#main_logos").css("position", "relative");
		$("#first_logo").css("margin-left", "0");
	} else {
		$("#main_logos").css("position", "absolute");
		$("#first_logo").css("margin-left", "5px");
	}
}

$(window).resize(function () {
    waitForFinalEvent(checkSizes, 300, fullDateString.getTime())
});

window.onload = function() {

	checkSizes();

	$(".section_box").mouseover(function() {
		//$(this).find(".project_name").hide();
		$(this).find(".section_name").css("background-color", "rgba(0, 0, 0, 0.8)");
	});
	$(".section_box").mouseout(function() {
		//$(this).find(".project_name").show();
		$(this).find(".section_name").css("background-color", "rgba(0, 0, 0, 0.5)");
	});

	/*$(".modal-dialog").each(function(index) {
		var new_margin = ($(window).height() / 2) - ($(this).height() / 2);
		$(this).css("margin-top", new_margin)
	});*/

	if(window.location.href.indexOf('#replay') != -1) {
		$('#replay_modal').modal('show');
	}

}