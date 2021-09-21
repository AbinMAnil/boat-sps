function showList(){
    document.getElementById("drop-down-head-shop").style.opacity="1"

}
function hideHead(){
    document.getElementById("drop-down-head-shop").style.opacity="0"
    document.getElementById("fi/rst-child-li").style.borderBottom="none";

}

// var count=0;
// var imgList=document.getElementsByClassName("slid-show-img");

// function slidShow()
// {
    
//     for(var i=0;i<=imgList.length;i++)
//     {
//         imgList[i].style.display="none"
//     }

//     if(count>=imgList.length)
//     {
//         count=0;
//     }

//     imgList[count].style.display="grid";

//     // imgList[count].style.animationName="slide_image_animation";
//     // imgList[count].style.animationDuration="1s";
//     // imgList[count].style.animationTimingFunction="ease-in";


//     count++;


//     setTimeout(slidShow,2000)

// }


//     slidShow();

var count=1;
function showRevew(){
    for(i=1;i<=3;i++){
        document.getElementById("img-"+i).style.opacity="0";
        document.getElementById("hide-last-img-"+i).style.opacity="0"
    }
    if(count==4){
        count=1;
    }

    document.getElementById("img-"+count).style.opacity="1";
    document.getElementById("hide-last-img-"+count).style.opacity="1";
   count++;

    setTimeout(showRevew,5000);
}
showRevew();

function hide(){
    document.getElementById("hide-stars-overlay").style.opacity="1";
    document.getElementsByClassName("right-img").style.background="rgba(32, 0, 0, 0.5)";

}
function showHead(){
    document.getElementById("hide-stars-overlay").style.opacity="0";
}