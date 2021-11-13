let left=0;
let images=["../images/video1.gif","../images/video2.gif","../images/video3.gif","../images/video4.gif","../images/video5.gif","../images/video6.gif","../images/video7.gif"];
let right=images.length-1;
let i=1;
let imgNum=2;

let myNav=document.querySelector('#navBar');

// Starting of navbar function
let moveTop=()=>{
    let scrolly=((document.body.scrollY)/(document.body.clientHeight))*100;
    let scrolltop=((document.documentElement.scrollTop)/(document.body.clientHeight))*100;

    if ((scrolly >= 2 ||scrolltop >= 2) && (scrolly <= 100 ||scrolltop <= 100)) {
        myNav.style.backgroundColor="rgb(148,1,148)";
    } 

    else{
        myNav.style.backgroundColor="transparent";
    }
}

window.onscroll = function() {moveTop()};
// End of navbar function


// Starting of video slider function
let defaultImages=()=>{
    document.querySelector(".activeVideo").src=images[1];
    document.querySelector(".leftVideoSlide").src=images[0];
    document.querySelector(".rightVideoSlide").src=images[2];
}

let nextSlide=()=>{
    if(i<=right){
        i++;
        document.querySelector("#prev").disabled=false;
        document.querySelector(".activeVideo").src=images[i];
        document.querySelector(".leftVideoSlide").src=images[i-1];
        document.querySelector(".rightVideoSlide").src=images[i+1];
    }
    if(i==right){
        document.querySelector("#next").disabled=true;
        document.querySelector(".rightVideoSlide").src="../images/end.jpg";
    }
}

let prevSlide=()=>{
    if(i>=left){
        document.querySelector("#next").disabled=false;
        document.querySelector(".activeVideo").src=images[i-1];
        document.querySelector(".leftVideoSlide").src=images[i-2];
        document.querySelector(".rightVideoSlide").src=images[i];
        i--;
    }
    if(i==left){
        document.querySelector("#prev").disabled=true;
        document.querySelector(".leftVideoSlide").src="../images/end.jpg";
    }
}
// End of video slider function


// Starting of image swap function
let swap=(id)=>{
    var temp=document.getElementById("1").src;
    document.getElementById("1").src=document.getElementById(id).src;
    document.getElementById(id).src=temp;
}
// End of image swap function


// Starting of header image slide function
let headerImages=()=>{
    if(imgNum==6){
        imgNum=2;
    }
    document.querySelector(".header").style.backgroundImage=`linear-gradient(180deg, rgba(32, 1, 61, 0.253), rgba(32, 1, 61, 0.267)),url("../images/headerImg${imgNum}.jpg")`;
    imgNum++;
}

setInterval(headerImages,2000);
// End of header image slide function