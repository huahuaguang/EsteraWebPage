//blog content 
const mblogs = document.querySelectorAll(".mblog");

mblogs.forEach(function(blog,index){
        const title = document.createElement('div');
        const intro = document.createElement('div');
        const other_info = document.createElement('div');

        //use ajax to get local blog html 
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(this.readyState==4 && this.status ==200){
                // create an object 
                const paser = new DOMParser();
                const targetDoc = paser.parseFromString(this.responseText,'text/html');
                //update the content            
                title.innerHTML = targetDoc.querySelector("header h1").innerHTML;
                intro.innerHTML = targetDoc.querySelector("section p:nth-child(1)").innerHTML;
                other_info.innerHTML = "Published in "+targetDoc.querySelector(".other").innerHTML;
            }
        };
        if(index==0){
            xmlhttp.open("GET","../blog_html/welcome_fixed.html");
            xmlhttp.send();
        }else if(index==1){
            xmlhttp.open("GET","../blog_html/about_me.html");
            xmlhttp.send();
        }else if(index==2){
            xmlhttp.open("GET","../blog_html/develop_experience.html");
            xmlhttp.send();
        }
        blog.appendChild(title);
        blog.appendChild(other_info);
        blog.appendChild(intro);
})
