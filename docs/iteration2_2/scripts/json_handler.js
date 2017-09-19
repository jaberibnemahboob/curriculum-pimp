/* ISSUES NEED TO RESOLVE */
// 1. MULTIPLE ATTRIBUTE IS NOT COMMING BECUASE YOU DIDN'T JOIN THE ARRAY OF ATTRIBUTE VALUE PAIR
// 2. IN MAIN PAGE LONG CONTENT ONLY ONE PARAGRAPH IS SHOWING, WHY?


let pageContent = document.querySelector('.pageContent');
let subSectionContent;
let pageTemplate = document.querySelector('.pageTemplate').content;
let subSectionTemplate = document.querySelector('.subSectionTemplate').content;
let dataSource = "data/json.json"

function getData(pageID){
    fetch(dataSource).then(function(response){
        return response.json();
    }).then(function(json){
        return show(json, pageID);
    });
}
function show(json, pageID){
    document.querySelector(".sideBarMenu").innerHTML = '';
    pageContent.innerHTML = '';
    let currentPageID;

    json.forEach(function(pageCont){
        if(pageID == pageCont.pageID){
            //console.log(pageCont)

            //STEP 1: get clone from template
            let clone = pageTemplate.cloneNode(true);

            //STEP 2: change data of page clone
            clone.querySelector(".data_header").textContent = pageCont.header;
            clone.querySelector(".data_shortContent").textContent = pageCont.shortContent;
            clone.querySelector(".data_longContent").innerHTML = jsonObject2html(pageCont.longContent,'');

            //STEP 3: add subSection data
            subSectionContent = clone.querySelector(".data_subSectionItems");
            pageCont.subSectionItems.forEach(function(subSectCont, index){
                //console.log(subSectCont.header);

                //STEP 1: get clone2 from template
                let clone2 = subSectionTemplate.cloneNode(true);

                //STEP 2: change data of subSection clone
                clone2.querySelector(".shortInfo").setAttribute("data-for","moreInfoCheckbox" + index);
                clone2.querySelector('input[type="checkbox"]').setAttribute("id","moreInfoCheckbox" + index);
                clone2.querySelector(".data_header").textContent = subSectCont.header;
                clone2.querySelector(".data_longContent").innerHTML = jsonObject2html(subSectCont.longContent, '');

                //STEP 3: add clone data to pageCont
                subSectionContent.appendChild(clone2);
            });

            //STEP 4: add cloned data to page
            pageContent.appendChild(clone);
        }

        //add a submenu for each in sideBarMenu
        document.querySelector(".sideBarMenu").innerHTML = document.querySelector(".sideBarMenu").innerHTML +
            '<a' + ((pageID == pageCont.pageID)?' class = "active"':'') + ' href="#" onclick="getPage(\''+ pageCont.pageID +'\');"><span>' + pageCont.menuItem + '</span></a>';
    });
}
function jsonObject2html(object, returnData){
    //js always pass variable as value in function
    //however, passing an object means it's actually passing a reference not value

    for(let tagKey in object){
        if(object.hasOwnProperty(tagKey)){
            //console.log(object[tagKey]);
            if(typeof (object[tagKey].value.content) == "object"){
                returnData = returnData + '<' + tagKey.split("_")[0] + ' ' + getKeyValuePairs(object[tagKey].attribute) + '>' + jsonObject2html(object[tagKey].value.content, '') + '</' + tagKey.split("_")[0] + '>';
            }else if(typeof(object[tagKey].value.content) == "string"){
                returnData = returnData + '<' + tagKey.split("_")[0] + ' ' + getKeyValuePairs(object[tagKey].attribute) + '>' + object[tagKey].value.content + '</' + tagKey.split("_")[0] + '>';
            }else {
                //DO NOTHING
                //IGNORE THIS ONE
            }
        }
    }
    return returnData;
}

function getKeyValuePairs(object){
    let v = '';
    for(let key in object){
        v = v+key+'="'+object[key]+'"';
    }
    return v;
}

function getPage(pageID){
    getData(pageID);
    setTimeout(function(){
        initialJSEffect();
    },1000);
}
