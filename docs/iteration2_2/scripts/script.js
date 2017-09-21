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
