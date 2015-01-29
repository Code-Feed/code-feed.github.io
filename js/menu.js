$(document).ready(function(){
$(".fa-bars").click(function(){
$(".header").fadeOut("slow");
$("select").fadeOut("fast");
$(".posts").fadeOut("fast");
$(".btn").fadeOut("fast");
$("footer").fadeOut("fast");
$(".nav-box").animate({left:'0',opacity:'1'}).fadeIn("slow");

});

$(".fa-times").click(function(){
$(".nav-box").animate({left:'-1366px',opacity:'0.7'});
$(".header").fadeIn();
$("select").fadeIn();
$(".posts").fadeIn();
$(".btn").fadeIn();
$("footer").fadeIn();

});


});