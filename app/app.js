document.addEventListener("DOMContentLoaded",
    function loadTreeData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'public/tree.json', true);

        xhr.onreadystatechange = function(e) {

                return new Promise(function(resolve) {
                        if (this.status == 200) {
                                var response = JSON.parse(this.responseText);

                        }
                        else {

                        }
                });
                xhr.send();
        };

});




        
