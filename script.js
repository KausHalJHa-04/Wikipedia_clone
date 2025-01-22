
const maincontentpage = document.querySelector(".main-content-page");
const maincontentpage2 = document.querySelector(".main-content-page2");

const articlebutton = document.querySelector(".article-button");
const talkbutton = document.querySelector(".talk-button");

maincontentpage2.classList.add("main-content-page-hide");


talkbutton.addEventListener("click",(event)=>{
    event.preventDefault(); 
    maincontentpage.classList.add("main-content-page-hide");
    // maincontentpage2.classList.add("main-content-page-show"); 
    maincontentpage2.classList.remove("main-content-page-hide"); 
    // maincontentpage.classList.remove("main-content-page-show");
}) 

articlebutton.addEventListener("click",(event)=>{
    event.preventDefault(); 
    maincontentpage2.classList.add("main-content-page-hide"); 
    // maincontentpage2.classList.remove("main-content-page-show");
    // maincontentpage.classList.add("main-content-page-show");
    maincontentpage.classList.remove("main-content-page-hide");
})
