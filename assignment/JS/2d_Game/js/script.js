

var chars =["Idle%20(1)","Idle%20(2)","Idle%20(3)","Idle%20(4)","Idle%20(5)","Idle%20(6)","Idle%20(7)","Idle%20(8)","Idle%20(9)","Idle%20(10)"];
count=0;
function charaAnimate() {
    $(".char").attr("src", "assects/png/" + chars[count] + ".png");
    count++;
    if (count == chars.length) {
        count = 0;
    }


}
setInterval(charaAnimate,100);