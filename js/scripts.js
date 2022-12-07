var calico = "<img src='images/calico.jpg'>"

$("#Farpaw path").attr("fill", "url(#calico)");  

$(".bottom").html(calico)

/*
$("#catcolor").on("change", function () {

    console.log("change")

    var newcolor = $(this).val();
    console.log(newcolor)
    $("#Ear3 path").css("fill", newcolor)


})*/



var counterEr = 0;
var counterEy = 0;
var counterN = 0;
var counterT = 0;

$("#Earbutton path").on("click", function () {

    if (counterEr == 0){
   
    $("#Ear1").css("display", "inline");
    $("#Ear2").css("display", "none");
    $("#Earins").css("display", "inline");

    $("#Ear3").css("display", "none");
  
    $("#Ear3in").css("display", "none");

    counterEr++
    }

    else if (counterEr == 1){

        $("#Ear1").css("display", "none");
        $("#Ear2").css("display", "inline");
        $("#Earins").css("display", "inline");
    
        $("#Ear3").css("display", "none");
       
        $("#Ear3in").css("display", "none");
    counterEr++

    }

    else if (counterEr == 2){
       
        $("#Ear1").css("display", "none");
        $("#Ear2").css("display", "none");
        $("#Earins").css("display", "none");
    
        $("#Ear3").css("display", "inline");
       
        $("#Ear3in").css("display", "inline");

        counterEr = 0;
    }



})

$("#Eyebutton path").on("click", function () {

    if (counterEy == 0){
   
    $("#Eye1").css("display", "inline");
    $("#Eye2").css("display", "none");
    $("#Eye3").css("display", "none");
  

    counterEy++
    }

    else if (counterEy == 1){
        $("#Eye1").css("display", "none");
        $("#Eye2").css("display", "inline");
        $("#Eye3").css("display", "none");
    counterEy++

    }

    else if (counterEy == 2){
       
        $("#Eye1").css("display", "none");
        $("#Eye2").css("display", "none");
        $("#Eye3").css("display", "inline");

        counterEy = 0;
    }



})

$("#Neckbutton path").on("click", function () {

    if (counterN == 0){
   
    $("#Neck1").css("display", "inline");
    $("#Neck2").css("display", "none");
    $("#Neck3").css("display", "none");
  

    counterN++
    }

    else if (counterN == 1){
        $("#Neck1").css("display", "none");
        $("#Neck2").css("display", "inline");
        $("#Neck3").css("display", "none");
    counterN++

    }

    else if (counterN == 2){
       
        $("#Neck1").css("display", "none");
        $("#Neck2").css("display", "none");
        $("#Neck3").css("display", "inline");

        counterN = 0;
    }



})

$("#Tailbutton path").on("click", function () {

    if (counterT == 0){
   
    $("#Tail1").css("display", "inline");
    $("#Tail2").css("display", "none");
    $("#Tail3").css("display", "none");
  

    counterT++
    }

    else if (counterT == 1){
        $("#Tail1").css("display", "none");
        $("#Tail2").css("display", "inline");
        $("#Tail3").css("display", "none");
    counterT++

    }

    else if (counterT == 2){
       
        $("#Tail1").css("display", "none");
        $("#Tail2").css("display", "none");
        $("#Tail3").css("display", "inline");

        counterT = 0;
    }



})


