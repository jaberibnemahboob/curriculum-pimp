function initialJSEffect(){
    document.querySelectorAll('*[data-type="label"]').forEach(function(item){
        let tName = item.getAttribute("data-for");
        item.addEventListener("click",function(){
            document.querySelector("#"+tName).checked = (document.querySelector("#"+tName).checked)? false : true;
            if(document.querySelector("#"+tName).checked) item.querySelector(".infoMenuArrow").innerHTML = "<span>&#8743;</span>";
            else item.querySelector(".infoMenuArrow").innerHTML = "<span>&#8744;</span>";
        });
    });
    document.querySelectorAll(".pageContent div.shortInfo").forEach(subSectionScroll);
}
function subSectionScroll(item){
    item.addEventListener('click',function(e){
        e.preventDefault();
        item.parentNode.scrollIntoView({behavior: 'smooth'});
    });
}

let carouselCount = 4;
let imgItems = document.querySelectorAll(".imgBox img");
let currentItem;

function changeImg(lastItem, nextItem){
    if(lastItem != undefined){
        lastItem.classList.remove("fadeIn");
        lastItem.classList.add("fadeOut");
        nextItem.classList.add("fadeIn");
        currentItem = nextItem;
        setTimeout(function(){
            lastItem.classList.remove("fadeOut");
        },1000);

        setTimeout(function(){
            if(carouselCount>0){
                changeImg(imgItems[carouselCount], imgItems[(carouselCount - 1)]);
            }else changeImg(imgItems[0], imgItems[4]);
            carouselCount--;
            if(carouselCount <= 0) carouselCount = 4;
        },5000);
    }
}

    setTimeout(function(){
        if(carouselCount>0){
            changeImg(imgItems[carouselCount], imgItems[(carouselCount - 1)]);
        }else changeImg(imgItems[0], imgItems[4]);
        carouselCount--;
        if(carouselCount <= 0) carouselCount = 4;
    },5000);
