
$("#Color2 path").attr("fill", "url(#calico)");

$("#Color1 path").attr("fill", "url(#shell)");

$("#Color3 path").attr("fill", "url(#grey)");

$("#Color4 path").attr("fill", "url(#tux)");
/*
$("#catcolor").on("change", function () {

    console.log("change")

    var newcolor = $(this).val();
    console.log(newcolor)
    $("#Ear3 path").css("fill", newcolor)


})*/

var suffix = ["fur", "patch", "nose", "tail", "paw", "star", "kit", "pelt", "heart",
"leaf", "thorn", "spot", "frost", "bite", "mouth", "ear", "branch", "claw", "leap",
"breeze", "willow", "flower", "bloom", "feather", "blaze", "dew", "leg", "stripe",
"stream", "face", "whisker", "fang"]

var personality = ["<p>They are a sharp-tongued and ambitious warrior who wants to be the best leader for their clan one day.</p>",
"<p>They are a soft-spoken medicine cat who prefers to keep to themselves.</p>",
"<P>They are a wise senior warrior who’s thinking about joining the elder’s den soon.</p>",
"<p>They are a young reckless rookie who wants to prove themselves to their clan no matter what cost.</p>",
"<p>They are a loner who was formally a clan cat. They now live in the outskirts of the clans mostly living a quiet solitary life.</p>",
"<p>They are a former clan cat that gave up their duty to their clan to join a comfy life with two-legs.</p>"]




//taken from the excersice
$("#catName").on("keypress", function(e) {

    if ( e.key == "Enter") {

        var catname = $(this).val()
        console.log(catname)

        $(this).remove()
        $("#myname").text(catname)

        var randomNum = Math.floor(Math.random() * suffix.length);
        $("#myname").append(suffix[randomNum])

        var randomNumP = Math.floor(Math.random() * personality.length);
        $("#myname").after(personality[randomNumP])
    }

  

})




$("#Color2 path").on("click", function () {

    $(".all path").attr("fill", "url(#calico)");


    $("#Earins path").attr("fill", "#fad4cf");

    $("#Ear3in path").attr("fill", "#fad4cf");

    $(".iris path").attr("fill", "#00a13b");


})


$("#Color1 path").on("click", function () {

    $(".all path").attr("fill", "url(#shell)");

    $("#Earins path").attr("fill", "#f5a98e");

    $("#Ear3in path").attr("fill", "#f5a98e");

    $(".iris path").attr("fill", "#4d9de8");


})

var graycount = 0;

$("#Color3 path").on("click", function () { 

    $("#Earins path").attr("fill", "#fad4cf");

    $("#Ear3in path").attr("fill", "#fad4cf");

    $(".iris path").attr("fill", "#f7c307");

    if (graycount == 0){
        $(".all path").attr("fill", "url(#white)");
        graycount++
    }

    else if (graycount == 1){

        $(".all path").attr("fill", "url(#grey)");
        graycount++
    }

    else if (graycount == 2){

        $(".all path").attr("fill", "url(#black)");

        $("#Earins path").attr("fill", "#ad7872");

        $("#Ear3in path").attr("fill", "#ad7872");
    
        graycount = 0;
    }


})

var patchcount = 0;

$("#Color4 path").on("click", function () {
    $("#Earins path").attr("fill", "#fad4cf");

    $("#Ear3in path").attr("fill", "#fad4cf");

    $(".iris path").attr("fill", "#a558fc");

    if (patchcount == 0){

        $(".all path").attr("fill", "url(#tux)");
        patchcount++
    }

    else {
        $(".all path").attr("fill", "url(#patch)");
        patchcount = 0;
    }



})


var counterEr = 0;
var counterEy = 0;
var counterN = 0;
var counterT = 0;

$("#Earbutton path").on("click", function () {

    if (counterEr == 0) {

        $("#Ear1").css("display", "inline");
        $("#Ear2").css("display", "none");
        $("#Earins").css("display", "inline");

        $("#Ear3").css("display", "none");

        $("#Ear3in").css("display", "none");

        counterEr++
    }

    else if (counterEr == 1) {

        $("#Ear1").css("display", "none");
        $("#Ear2").css("display", "inline");
        $("#Earins").css("display", "inline");

        $("#Ear3").css("display", "none");

        $("#Ear3in").css("display", "none");
        counterEr++

    }

    else if (counterEr == 2) {

        $("#Ear1").css("display", "none");
        $("#Ear2").css("display", "none");
        $("#Earins").css("display", "none");

        $("#Ear3").css("display", "inline");

        $("#Ear3in").css("display", "inline");

        counterEr = 0;
    }



})

$("#Eyebutton path").on("click", function () {

    if (counterEy == 0) {

        $("#Eye1").css("display", "inline");
        $("#Eye2").css("display", "none");
        $("#Eye3").css("display", "none");


        counterEy++
    }

    else if (counterEy == 1) {
        $("#Eye1").css("display", "none");
        $("#Eye2").css("display", "inline");
        $("#Eye3").css("display", "none");
        counterEy++

    }

    else if (counterEy == 2) {

        $("#Eye1").css("display", "none");
        $("#Eye2").css("display", "none");
        $("#Eye3").css("display", "inline");

        counterEy = 0;
    }



})

$("#Neckbutton path").on("click", function () {

    if (counterN == 0) {

        $("#Neck1").css("display", "inline");
        $("#Neck2").css("display", "none");
        $("#Neck3").css("display", "none");


        counterN++
    }

    else if (counterN == 1) {
        $("#Neck1").css("display", "none");
        $("#Neck2").css("display", "inline");
        $("#Neck3").css("display", "none");
        counterN++

    }

    else if (counterN == 2) {

        $("#Neck1").css("display", "none");
        $("#Neck2").css("display", "none");
        $("#Neck3").css("display", "inline");

        counterN = 0;
    }



})

$("#Tailbutton path").on("click", function () {

    if (counterT == 0) {

        $("#Tail1").css("display", "inline");
        $("#Tail2").css("display", "none");
        $("#Tail3").css("display", "none");


        counterT++
    }

    else if (counterT == 1) {
        $("#Tail1").css("display", "none");
        $("#Tail2").css("display", "inline");
        $("#Tail3").css("display", "none");
        counterT++

    }

    else if (counterT == 2) {

        $("#Tail1").css("display", "none");
        $("#Tail2").css("display", "none");
        $("#Tail3").css("display", "inline");

        counterT = 0;
    }



})


