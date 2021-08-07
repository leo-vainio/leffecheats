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
        var b="Leffecheats".split("");
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
    
    // for typing out information text
    TypingText=function(e,t,n,r) {
        if(typeof document.getElementById=="undefined"||typeof e.innerHTML=="undefined") {
            this.running=true;return
        }
        this.element=e;
        this.finishedCallback=r?r:function() {
            return
        };
        this.interval=typeof t=="undefined"?100:t;
        this.origText=this.element.innerHTML;
        this.unparsedOrigText=this.origText;
        this.cursor=n?n:"";
        this.currentText="";
        this.currentChar=0;
        this.element.typingText=this;
        if(this.element.id=="")this.element.id="typingtext"+TypingText.currentIndex++;
        TypingText.all.push(this);
        this.running=false;
        this.inTag=false;
        this.tagBuffer="";
        this.inHTMLEntity=false;
        this.HTMLEntityBuffer=""};
        TypingText.all=new Array;
        TypingText.currentIndex=0;
        TypingText.runAll=function() {
            for(var e=0;e<TypingText.all.length;e++)TypingText.all[e].run()
        };
        TypingText.prototype.run=function() {
            if(this.running)return;
            if(typeof this.origText=="undefined") {
                setTimeout("document.getElementById('"+this.element.id+"').typingText.run()",this.interval);
                return
            }
            if(this.currentText=="")this.element.innerHTML="";
            if(this.currentChar<this.origText.length) {
                if(this.origText.charAt(this.currentChar)=="<"&&!this.inTag) {
                    this.tagBuffer="<";
                    this.inTag=true;
                    this.currentChar++;
                    this.run();
                    return
                }
                else if(this.origText.charAt(this.currentChar)==">"&&this.inTag) {
                    this.tagBuffer+=">";
                    this.inTag=false;
                    this.currentText+=this.tagBuffer;
                    this.currentChar++;this.run();
                    return
                }
                else if(this.inTag) {
                    this.tagBuffer+=this.origText.charAt(this.currentChar);
                    this.currentChar++;
                    this.run();
                    return
                }
                else if(this.origText.charAt(this.currentChar)=="&"&&!this.inHTMLEntity) {
                    this.HTMLEntityBuffer="&";
                    this.inHTMLEntity=true;
                    this.currentChar++;
                    this.run();
                    return
                }
                else if(this.origText.charAt(this.currentChar)==";"&&this.inHTMLEntity) {
                    this.HTMLEntityBuffer+=";";
                    this.inHTMLEntity=false;
                    this.currentText+=this.HTMLEntityBuffer;
                    this.currentChar++;this.run();
                    return
                }
                else if(this.inHTMLEntity) {
                    this.HTMLEntityBuffer+=this.origText.charAt(this.currentChar);
                    this.currentChar++;
                    this.run();
                    return
                }
                else {
                    this.currentText+=this.origText.charAt(this.currentChar)}this.element.innerHTML=this.currentText;
                    this.element.innerHTML+=this.currentChar<this.origText.length-1?typeof this.cursor=="function"?this.cursor(this.currentText):this.cursor:"";
                    this.currentChar++;
                    setTimeout("document.getElementById('"+this.element.id+"').typingText.run()",this.interval)
                }
            else {
                this.currentText="";this.currentChar=0;this.running=false;this.finishedCallback()
            }
        };
    
    new TypingText(document.getElementById("text"), 100, function(i) { 
        var ar = new Array("\\", "|", "/", "-"); 
        return " " + ar[i.length % ar.length]; 
    });
    TypingText.runAll();
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