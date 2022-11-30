barriesMargin= 1000;
myboxId=1;
function Createbarries(){
    for (var i=0;i<12; i++){
        $(".background").append("<div style='margin-left:"+barriesMargin+"px  ' id='box"+i+"'></div>");//.css( "margin-left",""+barriesMargin+"px");
        // console.log(i);

        barriesMargin =barriesMargin + 700;

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