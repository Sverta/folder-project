document.addEventListener("DOMContentLoaded",
    function loadTreeData() {
        var xhr = new XMLHttpRequest(); //создает новый объект
        var url = 'public/tree.json';
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
            var jsonResponse = JSON.parse(this.responseText);
            var folder = document.getElementById('folder');
            var link;
            var output = "<ul>";
            for (var i = 0; i <= jsonResponse.length - 1; i++) {
                ////// up level
                link = "<a href='#' class='datavaluemain accordionItemHeading '>" + jsonResponse[i].name + "</a>";
                output += "<li class='accordionItem'>" + link + "</li>";
                //////level 2 and 3
                for (var j = 0; j <= jsonResponse.length; j++) {
                    var link2;
                    var link3;
                    if(jsonResponse[i].children[j].children[0] == null){
                        link2 = "<p class='datavalue'>" + jsonResponse[i].children[j].name + "</p>";
                        link3 = '';
                    } else{
                        link2 = "<a href='#' class='datavalue accordionItemHeading'>" + jsonResponse[i].children[j].name + "</a>";
                        link3 = "<p class='datavalue2'>" + jsonResponse[i].children[j].children[0].name + "</p>";
                    }
                    output += "<li class='accordionItem'>" + link2 + "</li>" + link3 ;
                }
            }

            output += "</ul>";
            folder.innerHTML += output;
            console.log(output);
        };

    });

window.onload = function()
{
    var accItem = document.getElementsByClassName('accordionItem');
    var accItem2 = document.getElementsByClassName('datavalue');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (var i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
        for (i = 0; i < accItem2.length; i++) {
            if(accItem2[i].style.display == 'none'){
                accItem2[i].style.display = 'block';
            } else if(accItem2[i].style.display == 'block') {
                accItem2[i].style.display = 'none'
            }

            // accItem[i].className = 'accordionItem close';
            //console.log(itemClass);
        }
        // if (itemClass == 'accordionItem close') {
        //     this.parentNode.className = 'accordionItem open';
        // }
    }
}
        
