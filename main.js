jQuery(document).ready(function(){




$(".readmore").on("click", function(event){
  	event.preventDefault();
  	console.log("readmore clicked");
	$("p").slideDown();
	console.log("p slidesdown");
	$(".readmore").hide();
	console.log("readmore hide");
	

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