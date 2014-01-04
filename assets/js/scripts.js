$(function(){
	$("#menuButton").on('click', function(){
		if($("#menu").hasClass("open")){
			$("#menu").removeClass("open").addClass("closes");
		}
		else{
			$("#menu").removeClass("closes").addClass("open");
		}
	});
});