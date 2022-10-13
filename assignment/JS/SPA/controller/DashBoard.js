
$(document).ready(function(){
    $("#main_1").css('display','inline-block');
    $("#main_2").css('display','none');
    $("#main_3").css('display','none');
    $("#main_4").css('display','none');

});

$("#customer_btn").click(function(){
    $("#main_1").css('display','none');
    $("#main_2").css('display','inline-block');
    $("#main_3").css('display','none');
    $("#main_4").css('display','none');
});
$("#home_btn").click(function(){
    $("#main_1").css('display','inline-block');
    $("#main_2").css('display','none');
    $("#main_3").css('display','none');
    $("#main_4").css('display','none');

});
$("#items_btn").click(function(){
    $("#main_1").css('display','none');
    $("#main_2").css('display','none');
    $("#main_3").css('display','inline-block');
    $("#main_4").css('display','none');

});
$("#orders_btn").click(function(){
    $("#main_1").css('display','none');
    $("#main_2").css('display','none');
    $("#main_3").css('display','none');
    $("#main_4").css('display','inline-block');

});
