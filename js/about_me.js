const start = document.querySelector("#start");
const article_body = document.querySelector('article');
const ani_body = document.querySelector(".ani_body");
const back_btn = document.querySelector(".back_btn");

ani_body.style.display = "none";
start.onclick = function(){
    //remove the class that add when the last button was clicked to avoid the effect of current click action.
    ani_body.classList.remove("vanished");
    article_body.classList.remove("emerged");

    //switch page animation
    article_body.classList.add("vanished");
    setTimeout(() => {
        article_body.style.display="none";
        ani_body.classList.add("emerged");
        ani_body.classList.add("ani_background");
        setTimeout(() => {
            ani_body.style.display ="flex";
        }, 500);
    }, 400);
    
};
back_btn.onclick = function(){
    //remove the class that add when the last button was clicked to avoid the effect of current click action.
    article_body.classList.remove("vanished");
    ani_body.classList.remove("emerged");

    //switch page animation
    ani_body.classList.add("vanished");
    setTimeout(() => {
        ani_body.style.display="none";
        article_body.classList.add("emerged");
        setTimeout(() => {
            article_body.style.display ="flex";
        }, 500);
    }, 400);
};

