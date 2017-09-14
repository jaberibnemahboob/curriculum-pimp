let stickyItems = document.querySelectorAll('.stickyElem');
let stickyItemsOffsetTop = [];
stickyItems.forEach(function(item, index){
    stickyItemsOffsetTop[index] = item.offsetTop;
});
window.onscroll = function(){
    stickyItems.forEach(function(item, index){
        toggleClass(item, 'sticky', ((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop), stickyItemsOffsetTop[index], 24);
    });
};
function toggleClass(item, cls, windowOffsetTop, itemOffsetTop, itemTop){
    if(((windowOffsetTop + itemTop) > itemOffsetTop)){
        item.classList.add(cls);
        item.style = 'top: ' + itemTop + 'px;';
    }else{
        item.classList.remove(cls);
    }
}
