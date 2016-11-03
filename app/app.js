document.addEventListener("DOMContentLoaded",
    function loadTreeData() {
        var xhr = new XMLHttpRequest(); //создает новый объект
            xhr.open('GET', 'public/tree.json', true);
            xhr.send();
            xhr.onreadystatechange = function() {
                    if (this.readyState != 4) return;
                    var jsonResponse = JSON.parse(xhr.responseText, function (key,value) {
                            var folder = document.getElementById('folder');
                            var link = "<a href='#'>"+xhr.responseText+"</a>";
                            folder.innerHTML = "<ul><li>"+link+"</li></ul>";
                            // for( var prop in this ) {
                            //         if( this.hasOwnProperty( prop ) ) {
                            //                 if( this[ prop ] === value )
                            //                         return prop;
                            //                 //console.log(prop);
                            //         }
                            // }

                               // if(key == 'name'){
                                    //       //  return value;
                                    //         console.log(value)
                                    // }else if(key == 'children'){
                                    //
                                    // }


                    });
            };
    });



        
