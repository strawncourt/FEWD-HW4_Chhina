jQuery(document).ready(function(){




$(".readmore").on("click", function(event){
  	event.preventDefault();
	$("p").slideToggle();
	$(".readmore").hide();
	console.log("trace");

});

$(".readless").on("click", function(event){
	event.preventDefault();
	$().slideUp("readmore");
	$(".readless, #show-this-on-click").hide();
	$(".readmore").show();

});

$(".learnmore").on("click", function(event){
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();


});


});