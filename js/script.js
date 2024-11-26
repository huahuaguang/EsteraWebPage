// click the side bar button and a part of page switch
//select all button
const buttons = document.querySelectorAll(".clf_content button");
const contents = document.querySelectorAll(".mright");

//hide other elements
contents.forEach(function(content){
    content.style.display = 'none';
});
contents[1].style.display = 'flex';
buttons[1].style.backgroundColor = "var(--dark-color)";
//click one and switch
buttons.forEach(function(button,index){
    button.addEventListener("click",function(){
        target = index;

        //hide all
        contents.forEach(function(content){
            content.style.display = 'none';
        });
        //set all button without a dark color
        buttons.forEach(function(button){
            button.style.backgroundColor = 'var(--main-color)';
        });
        contents[target].style.display = 'flex';
        contents[target].classList.add('switch_content')
        buttons[target].style.backgroundColor = "var(--dark-color)";
    });
});


//blog content 
const mblogs = document.querySelectorAll(".mblog");

mblogs.forEach(function(blog,index){
    if(index!=0){
        const title = document.createElement('div');
        const intro = document.createElement('div');
        const other_info = document.createElement('div');
        title.textContent = "Title";
        intro.textContent = "introduction";
        other_info.textContent = "other information";
        blog.appendChild(title);
        blog.appendChild(intro);
        blog.appendChild(other_info);
    }
})

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