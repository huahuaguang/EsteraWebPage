//pictures
// light box 
const light_box =document.querySelector(".light_box");
const main = document.querySelector("section,header,footer");
const close_btn = document.querySelector(".close");
const light_img = document.querySelector("#light_img");

images = document.querySelectorAll(".mright.pictures img ");
images.forEach(function(img,index){
    img.addEventListener('click',()=>{
        console.log(index);
        light_img.src = img.src;
        main.style.display = "none";
        light_box.style.display = "flex";
    })
});
close_btn.addEventListener("click",function(e){
    main.style.display = "block";
    light_box.style.display = "none";
});