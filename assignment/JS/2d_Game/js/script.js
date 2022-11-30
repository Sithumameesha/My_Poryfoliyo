
let audio1= new Audio();
audio1.src= "assects/audio/AUD-20221130-WA0012.mp3";

var run =["Run__000.png","Run__001.png","Run__002.png","Run__003.png","Run__004.png","Run__005.png","Run__006.png","Run__008.png","Run__009.png"   ];
count=0;
function charaAnimate() {
    $(".char").attr("src", "assects/png2/Idle__00"+count+".png");
    count++;
    if (count == 10) {
        count = 0;
    }


}


run_count=0;
function RunAnimate() {
    $(".char").attr("src", "assects/png2/Run__00"+run_count+".png");
    run_count++;
    if (run_count == 10) {
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
let score =0;
function moveBackground(){
    poistion = poistion - 20;
    $(".background").css("background-position-x",""+poistion+"px");
    score = score +1;
    $("#score").text(score);
    if (score==350){
        alert("Hello");
    }
}
var jumpCount =1;
var topChar=417;
function jumpAction(){

    $(".char").attr("src", "assects/png2/Jump__00"+jumpCount+".png");
    jumpCount++;
    if (jumpCount<=6){
        topChar = topChar -50 ;
        $(".char").css("top",""+topChar+"px");
    }
    if (jumpCount>=7){
        topChar = topChar + 50 ;
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
    jumpAnimationNum = setInterval(jumpAction,150);
    // audio1.play();


}

$(document).on('keydown', function (event) {
    if (event.key == "Enter") {
audio1.play();
        if (jumpAnimationNum==0){
            jumpAnimation();
        }

    }
});
AnimateIdial();
var barieId;
$(document).on('keydown', function (event) {
    if (event.key == "Tab") {
        if (animateRunId==0){
            AnimateRun();
            // Createbarries();
         barieId=setInterval(bariesAnimationId,150  );
        }
        if(AnimateBackGroundNum==0){
            AnimateBackground();
        }
    }
});

var Dead =0;
function deanAnimation(){
        $(".char").attr("src","assects/png2/Dead__00"+Dead+".png");
        Dead++;
        if (Dead==10){
            clearInterval(deadani);
        }
}
let deadani;
function DeadEffect(){
    clearInterval(animateId);
    deadani = setInterval(deanAnimation,100);
}
