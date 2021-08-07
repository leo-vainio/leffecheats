var typeText = document.querySelector(".text")

// banner background console text
var textToBeTyped = "Leffecheats [Version 10.0.10240]\n" +
"(c) 2021 Leffecheats Corporation. All rights reserved.\n\n" +
"C:\\Users\\Hackerboi>leffecheats innit\n" +
"Hi there! Welcome to leffecheats.com! Battlefield 4's " +
"best kept secret. Tired of not getting a 100 kill streak with a Mare's " +
"Leg 40x? Make that something of the past, with leffecheats you're " +
"guaranteed to get all those pistol achievements you've been dreaming " +
"about!\n\n" +
"C:\\Users\\Hackerboi>"

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
    }, 5)
}
playAnim()



$(document).ready(function(){
    var title = document.title;
    setInterval(function(){title = title.substring(1, title.length) + title.substring(0, 1);document.title = title;}, 200);
    $("body").bind('mousemove', function(evt) {
        $("#barY").css({
            "top": evt.pageY + "px"
        });
        $("#barX").css({
            "left": evt.pageX + "px"
        });
    });
});
				