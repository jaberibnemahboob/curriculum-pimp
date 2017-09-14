document.querySelectorAll('*[data-type="label"]').forEach(function(item){
    let tName = item.getAttribute("data-for");
    item.addEventListener("click",function(){
        document.querySelector("#"+tName).checked = (document.querySelector("#"+tName).checked)? false : true;
    });
});
