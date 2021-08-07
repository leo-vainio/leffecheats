
// CONSOLE TEXT
var typeText = document.querySelector(".text")
var textToBeTyped = "Leffecheats [Version 10.0.10240]\n" +
"(c) 2021 Leffecheats Corporation. All rights reserved.\n\n" +
"C:\\Users\\Hackerboi>leffecheats innit\n" +
"Hi there! Welcome to leffecheats.com! Battlefield 4's " +
"best kept secret. Tired of not getting a 100 kill streak with a Mare's " +
"Leg 40x? Make that something of the past, with leffecheats you're " +
"guaranteed to get all those pistol achievements you've been dreaming " +
"about!\n\n" +
"C:\\Users\\Hackerboi>start leffecheats.exe\n" +
"You have two options: Install leffecheats today or be reported to agency for immediate deportation ;)"
var index = 0, isAdding = true

function playAnim() {
    setTimeout(function () {
        typeText.innerText = textToBeTyped.slice(0, index)
        if (isAdding) {
            if (index > textToBeTyped.length) {
                return false
            } else {
                index++
            }
        } 
        playAnim()
    }, 10)
}
playAnim()

// GOOGLE FUNCTIONS
$(document).ready(function(){
    // crosshair
    $("body").bind('mousemove', function(evt) {
        $("#barY").css({
            "top": evt.pageY + "px"
        });
        $("#barX").css({
            "left": evt.pageX + "px"
        });
    });
    
    // Coloured banner title
    function doColour(a) {
        setInterval(function() {
            for(var b=0;b<a.length;b++) {
                $("#letter"+b).css( {
                    color:colour[b]
                })
            }
            for(var b=0;b<colour.length;b++) {
                colour[b-1]=colour[b]
            }
            colour[colour.length-1]=colour[-1]
        },50)
    }
    
    function initColours(a) {
        var b="LEFFECHEATS".split("");
        var c="<h1>";
        $.each(b,function(a,b) {
            c+="<span id='letter"+a+"'>"+b+"</span>"
        });
        c+="</h1>";
        $("#doColours").html(c);
        doColour(b);
        var d=1;setInterval(function() {
            while(colour.length<b.length) {
                colour=colour.concat(colour)
            }
            d=Math.floor(Math.random()*colours.length);colour=colours[d]
        },5e3)
    }
    
    colours=new Array;
    colours[0]=new Array("#FF0000","#FF1100","#FF2200","#FF3300","#FF4400","#FF5500","#FF6600","#FF7700","#FF8800","#FF9900","#FFaa00","#FFbb00","#FFcc00","#FFdd00","#FFee00","#FFff00","#FFee00","#FFdd00","#FFcc00","#FFbb00","#FFaa00","#FF9900","#FF8800","#FF7700","#FF6600","#FF5500","#FF4400","#FF3300","#FF2200","#FF1100");
    colours[1]=new Array("#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00","#00FF00","#000000","#00FF00","#00FF00");
    colours[2]=new Array("#00FF00","#FF0000","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00");
    colours[3]=new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040");
    colours[4]=new Array("#FF0000","#EE0000","#DD0000","#CC0000","#BB0000","#AA0000","#990000","#880000","#770000","#660000","#550000","#440000","#330000","#220000","#110000","#000000","#110000","#220000","#330000","#440000","#550000","#660000","#770000","#880000","#990000","#AA0000","#BB0000","#CC0000","#DD0000","#EE0000");
    colours[5]=new Array("#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF");
    colours[6]=new Array("#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00","#0000FF","#FFFF00");
    colour=colours[4];
    initColours();
});

// defib nation blink animation
var blink_speed = 50;
var t = setInterval(function () {
    var ele = document.getElementById('blinker');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

// to play sound
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  		if (!isChrome){
      		$('#iframeAudio').remove()
  		}
  		else {
      		$('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  		}