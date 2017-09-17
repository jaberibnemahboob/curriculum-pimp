document.querySelectorAll('.img2svg').forEach(function(imgItem){
    let elem;
    console.log(imgItem);
    if(imgItem.nodeName.toLowerCase() == 'img'){
        fetch(imgItem.src).then(function(response){
            return response.text();
        }).then(function(svgTxt){
            elem = document.createElement('div');
            elem.setAttribute('class',imgItem.classList.value);
            elem.innerHTML = svgTxt;
            imgItem.parentNode.insertBefore(elem,imgItem);
            imgItem.parentNode.removeChild(imgItem);
        });
    }else console.log(imgItem.nodeName);
});
