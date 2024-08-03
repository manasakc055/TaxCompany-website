let scrollContainer = document.querySelector("pro-gallery");
let backBtn = document.getElementsByClassName("fa-angle-left");
let nextBtn = document.getElementsByClassName("fa-angle-right");
scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltay;
});
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 100%;
});
backBtn.addEventListener("click", ()=>{ I
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft = 100%;
});