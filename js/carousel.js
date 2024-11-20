// 需要完善，过渡不平滑
const buttton_left = document.querySelector('.carousel-control-prev');
const buttton_right = document.querySelector('.carousel-control-next');
const imag_container = document.querySelector('.image-container');
const img = document.querySelectorAll('.img');
let index =0 ;
let time;

function position(){
    imag_container.style.left = (index * -100) + "%";
}
function add() {
    index = (index + 1) % img.length;
}

function desc() {
    index = (index - 1 + img.length) % img.length;
}

function timer() {
    time = setInterval(() => {
        add();
        position();
    }, 3000);
}

buttton_left.addEventListener("click", () => {
    desc();
    position();
    // clearInterval(time);
    // timer();
});

buttton_right.addEventListener("click", () => {
    add();
    position();
    // clearInterval(time);
    // timer();
});

// timer();

// (() => {
//     return alert('Welcome(*o*)!!');
//  })();