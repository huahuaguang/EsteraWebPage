// click the side bar button and a part of page switch
//select all button
const buttons = document.querySelectorAll(".clf_content button");
const contents = document.querySelectorAll(".mright");

//hide other elements
contents.forEach(function(content){
    content.style.display = 'none';
});
contents[0].style.display = 'flex';
buttons[0].style.backgroundColor = "var(--dark-color)";
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