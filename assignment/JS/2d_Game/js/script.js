

var chars =["Idle%20(1)","Idle%20(2)","Idle%20(3)","Idle%20(4)","Idle%20(5)","Idle%20(6)","Idle%20(7)","Idle%20(8)","Idle%20(9)","Idle%20(10)"];
var run =["Walk%20(1)","Walk%20(2)","Walk%20(3)","Walk%20(4)","Walk%20(5)","Walk%20(6)","Walk%20(7)","Walk%20(8)","Walk%20(9)","Walk%20(10)"];
count=0;
function charaAnimate() {
    $(".char").attr("src", "assects/png/" + chars[count] + ".png");
    count++;
    if (count == chars.length) {
        count = 0;
    }


}


run_count=0;
function RunAnimate() {
    $(".char").attr("src", "assects/png/" + run[run_count] + ".png");
    run_count++;
    if (run_count == run.length) {
        run_count =0 ;
    }


}
let animateId;
let animateRunId;
function AnimateRun(){
    clearInterval(animateId);
     animateRunId =setInterval(RunAnimate,100);
}
function AnimateIdial(){
    animateId =setInterval(charaAnimate,100);
}
function AnimateBackground(){
    setInterval(moveBackground,1000);
}


var poistion =0;
function moveBackground(){
    poistion = poistion - 20;
    $(".background").css("background-position-x",""+poistion+"px")
}
var jumpCount =1;
function jumpAction(){

    $(".char").attr("src", "assects/png/Jump%20("+jumpCount+").png");
    jumpCount++;
    if (jumpCount==11){
        jumpCount = 1;
      clearInterval(jumpAnimationNum);

        AnimateRun();
    }

}
let jumpAnimationNum;
function jumpAnimation(){
    clearInterval(animateRunId);
    jumpAnimationNum = setInterval(jumpAction,100);


}

$(document).on('keydown', function (event) {
    if (event.key == "Enter") {
        jumpAnimation();
    }
});
