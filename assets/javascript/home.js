
//    function myFunction() {
//     document.getElementById("quantity").innerHTML = "You and 1k others";
//     document.getElementById("likeText").style.color = "blue";
//     document.getElementById("like").style.color = "blue";
//   }

function mouseOver() {
    document.getElementById("box").classList.toggle("show");
}
// function mouseOut (obj){
//      document.getElementById("box").classList.toggle("show");
// }
var mouseTimer;
// function mouseOut(){
//     mouseTimer = window.setTimeout(exeTime,2000);
// }

// function exeTime(){
//     document.getElementById("box").classList.toggle("show");
// }
function clickLike(){
    document.getElementById("box").classList.toggle("show");
    document.getElementById("thumb").style.color = "blue";
    document.getElementById("likeText").style.color = "blue";
    document.getElementById("quantity").innerHTML = " You and 1k others";
    document.getElementById("thumb").src = "./assets/icons/liked.png";

}
function love(){
    document.getElementById("box").classList.toggle("show");
    document.getElementById("quantity").innerHTML = " You and 1k others";
    document.getElementById("likeText").innerHTML = "Love";
    document.getElementById("likeText").style.color = "red";
    document.getElementById("thumb").src = "./assets/icons/love.png";
}
function haha(){
    document.getElementById("box").classList.toggle("show");
    document.getElementById("quantity").innerHTML = "😆 You and 1k others";
    document.getElementById("likeText").style.color = "orange";
    document.getElementById("likeText").innerHTML = "Haha";
    document.getElementById("thumb").src = "./assets/icons/laugh.png";

}

function sad(){
    document.getElementById("box").classList.toggle("show");
    document.getElementById("quantity").innerHTML = "😭 You and 1k others";
    document.getElementById("likeText").style.color = "orange";
    document.getElementById("likeText").innerHTML = "Sad";
    document.getElementById("thumb").src = "./assets/icons/sad.png";
}

function angry(){
    document.getElementById("box").classList.toggle("show");
    document.getElementById("quantity").innerHTML = "😡 You and 1k others";
    document.getElementById("likeText").style.color = "red";
    document.getElementById("likeText").innerHTML = "Angry";
    document.getElementById("thumb").src = "./assets/icons/angry.png";
}

function like(){
        // thumb.style.color = "blue";
        // document.getElementById("thumb").style.color = "blue";
        document.getElementById("thumb").style.color = "blue";
        document.getElementById("quantity").innerHTML = " You and 1k others";
        document.getElementById("likeText").style.color = "blue";
        document.getElementById("thumb").src = "./assets/icons/liked.png";
        // document.getElementById("box").classList.toggle("show");
}

function unlike(){
    document.getElementById("quantity").innerHTML = " 1k";
    document.getElementById("thumb").style.color = "gray";
    document.getElementById("likeText").style.color = "black";
    document.getElementById("likeText").innerHTML = "Like";
    document.getElementById("box").classList.toggle("show");
    document.getElementById("thumb").src = "./assets/icons/like.png";
    

}

// document.getElementById("thumb").addEventListener("click", like);

