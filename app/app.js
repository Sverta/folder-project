document.addEventListener("DOMContentLoaded",
    function loadTreeData() {
        var xhr = new XMLHttpRequest(); //создает новый объект
        var url = 'public/tree.json';
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
            var jsonResponse = JSON.parse(xhr.responseText, function (key, value) {
                var folder = document.getElementById('folder');
                var output = "<ul>";
                var i;

                for (i in value) {
                    var link = "<a href='#' class='datavalue'>" + value + "</a>";
                    output = "<li>" + link + "</li>";
                }
                folder.innerHTML += output;
                output += "</ul>";

            });

            // var accordion = document.getElementsByClassName('datavalue');
            //
            // for (var k = 0; k < accordion.length; k++) {
            //     accordion[k].onclick = function(){
            //         this.classList.toggle("active");
            //         this.nextElementSibling.classList.toggle("show");
            //     }
            // }
            // console.log(accordion);
        };
    });



        
