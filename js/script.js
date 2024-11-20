// click the side bar button and a part of page switch
//select all button
const buttons = document.querySelectorAll(".clf_content button");
const contents = document.querySelectorAll(".mright");

//hide other elements
contents.forEach(function(content){
    content.style.display = 'none';
});
contents[1].style.display = 'flex';
//click one and switch
buttons.forEach(function(button,index){
    button.addEventListener("click",function(){
        target = index;

        //hide all
        contents.forEach(function(content){
            content.style.display = 'none';
        });
        contents[target].style.display = 'flex';
        contents[target].classList.add('switch_content')
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
