

var chars =["Idle%20(1)","Idle%20(2)","Idle%20(3)","Idle%20(4)","Idle%20(5)","Idle%20(6)","Idle%20(7)","Idle%20(8)","Idle%20(9)","Idle%20(10)"];
var run =["Run%20(1)","Run%20(2)","Run%20(3)","Run%20(4)","Run%20(5)","Run%20(6)","Run%20(7)","Run%20(8)"   ];
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
let animateRunId =0;
function AnimateRun(){
    clearInterval(animateId);
     animateRunId =setInterval(RunAnimate,100);

}
function AnimateIdial(){
    animateId =setInterval(charaAnimate,100);
}
let AnimateBackGroundNum =0;
function AnimateBackground(){
    AnimateBackGroundNum=setInterval(moveBackground,100 );
}


var poistion =0;
function moveBackground(){
    poistion = poistion - 20;
    $(".background").css("background-position-x",""+poistion+"px")
}
var jumpCount =1;
var topChar=417;
function jumpAction(){

    $(".char").attr("src", "assects/png/Jump%20("+jumpCount+").png");
    jumpCount++;
    if (jumpCount<=6){
        topChar = topChar -40 ;
        $(".char").css("top",""+topChar+"px");
    }
    if (jumpCount>=7){
        topChar = topChar + 40 ;
        $(".char").css("top",""+topChar+"px");
    }
    if (jumpCount==11){
        jumpCount = 1;
      clearInterval(jumpAnimationNum);
      jumpAnimationNum =0;
      animateRunId =0;
        AnimateRun();
    }

}
let jumpAnimationNum = 0;
function jumpAnimation(){
    clearInterval(animateRunId);
    jumpAnimationNum = setInterval(jumpAction,100);


}

$(document).on('keydown', function (event) {
    if (event.key == "Enter") {

        if (jumpAnimationNum==0){
            jumpAnimation();
        }

    }
});
AnimateIdial();
$(document).on('keydown', function (event) {
    if (event.key == "Tab") {
        if (animateRunId==0){
            AnimateRun();
        }
        if(AnimateBackGroundNum==0){
            AnimateBackground();
        }
    }
});