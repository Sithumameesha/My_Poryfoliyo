

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
function AnimateRun(){
    clearInterval(animateId);
    setInterval(RunAnimate,100);
    if ( background_id == 0 ){
        background_id =setInterval(moveBackground,100);
    }


}
function AnimateIdial(){
    animateId =setInterval(charaAnimate,80);


}
var poistion =0;
var  background_id =0;
function moveBackground(){
    poistion = poistion - 20;

    $(".background_img").css("background-position-x",""+poistion+"px")
}