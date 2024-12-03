//verify contact 
const comment_content = document.querySelector(".send_comment input:nth-child(1)");
const comment_email = document.querySelector(".send_comment input:nth-child(2)");
const comments_container = document.querySelector(".comments_container");
const error_text = document.querySelector(".error_text");

let comment_varify = /^(?!http:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$).{1,49}$/;
let email_varify = /^[\w-+.]+@[\w-]+\.[\w-.]+$/;

//verify input
comment_content.addEventListener('blur', function (event) {
    error_text.textContent = "Letters cannot exceed 50.";
    if (comment_varify.test(comment_content.value)) {
        error_text.textContent = "";
    }
});
comment_email.addEventListener('blur', function (event) {
    error_text.textContent = "The formate of emile should be like windy@163.com";
    if (email_varify.test(comment_email.value)) {
        error_text.textContent = "";
    }
});
document.addEventListener('submit', function (e) {
    // prevent default submit action
    e.preventDefault();
    
    if (!email_varify.test(comment_email.value)) {
        error_text.textContent = "The formate of emile should be like windy@163.com";
    }else{
        error_text.textContent = "";

        //create element
        const single_comment =document.createElement("div");
        const comment_profile = document.createElement("div");
        const comment_main = document.createElement("div");
        const comment_name = document.createElement("div");
        const single_comment_content = document.createElement("div");

        //add class name
        single_comment.className="single_comment";
        comment_profile.className ="comment_profile";
        comment_name.className = "comment_name";
        single_comment_content.className = "single_comment_content";

        //random comment profile
        let profile = ['#81d3a0','#d38199','#cc8ae5','#ede47e'];
        comment_profile.style.backgroundColor = profile[Math.floor(Math.random()*4)];
        comment_profile.textContent = comment_email.value.charAt(0);
        // get the name from email
        let email_arr = comment_email.value.split("@");
        
        //add the value
        comment_name.innerHTML = email_arr[0];
        single_comment_content.innerHTML = comment_content.value;
        comment_main.appendChild(comment_name);
        comment_main.appendChild(single_comment_content);
        single_comment.appendChild(comment_profile);
        single_comment.appendChild(comment_main);
        comments_container.appendChild(single_comment);
    }
});