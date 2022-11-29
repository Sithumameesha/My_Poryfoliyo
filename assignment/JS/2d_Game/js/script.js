

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
function moveBackground(){
    poistion = poistion - 20;
    $(".background").css("background-position-x",""+poistion+"px")
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
var barieId;
$(document).on('keydown', function (event) {
    if (event.key == "Tab") {
        if (animateRunId==0){
            AnimateRun();
         barieId=setInterval(bariesAnimationId,100  );
        }
        if(AnimateBackGroundNum==0){
            AnimateBackground();
        }
    }
});
barriesMargin= 1000;
myboxId=1;
function Createbarries(){
    for (var i=0;i<12; i++){
        $(".background").append("<div style='margin-left:"+barriesMargin+"px  ' id='box"+i+"'></div>");//.css( "margin-left",""+barriesMargin+"px");
        // console.log(i);

        barriesMargin =barriesMargin + 500;

        // if (i<2){
        //     barriesMargin =barriesMargin + 200;
        // }
        // if (i<5){
        //     barriesMargin =barriesMargin + 150;
        // }
        // if (i<6){
        //     barriesMargin =barriesMargin + 100;
        // }
        // if (i<7){
        //     barriesMargin =barriesMargin + 250;
        // }
        // if (i<10){
        //     barriesMarg
        // var box = document.createElement("div");
        // box.className ="box";
        // document.getElementsByClassName("background").appendChild(box);
        // box.style.marginLeft = barriesMargin +"px";
    }
}
// var bariesAnimationId=0;
function bariesAnimationId(){
    for (var i=0;i<12;i++){
        var box = document.getElementById("box"+i+"");
        var currentmargin = getComputedStyle(box).marginLeft;
        var newMarin = parseInt(currentmargin)-35;
        box.style.marginLeft = newMarin+"px";



        if(newMarin>=-110 && newMarin<=100){
            if (topChar>400){
                clearInterval(animateRunId);
                animateRunId =-1;
                clearInterval(jumpAnimationNum);
                jumpAnimationNum=-1;
                clearInterval(AnimateBackGroundNum);
                AnimateBackGroundNum=-1;
                clearInterval(barieId);
                barieId=-1;
                DeadEffect();
                document.getElementById("box"+i+"").style.display= "none";

            }
        }

   }
}
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
