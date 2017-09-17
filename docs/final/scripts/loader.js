//STYLE LOADER
let scripts = [
    "scripts/img2svg.js"
];
function loadjs(listOfScript){
    listOfScript.forEach(function(item){
        let currentScript = document.createElement('script');
        currentScript.setAttribute('src',item);
        setTimeout(function(){document.querySelector('body').appendChild(currentScript);},0);
    });
}
loadjs(scripts);

//SCRIPT LOADER
let styles = [
    "styles/svg.css",
    "styles/styletile.css"
];
function loadcss(listOfStyle){
    listOfStyle.forEach(function(item){
        let currentStyle = document.createElement('link');
        currentStyle.setAttribute('rel','stylesheet');
        currentStyle.setAttribute('href',item);
        setTimeout(function(){document.querySelector('head').appendChild(currentStyle);},0);
    });
}
loadcss(styles);
