var x=[];
var payload=""
     $.ajax({
                url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
                data:{'api_key':'your_api_key','sol':'1000','page':'1'},
                success: function (result) {
                    for(var i in result.photos){
                       x[i] = result.photos[i].img_src;
                        payload=result
                        }
                }
            }); 
     var j=0;
        function myFunction(){
                    var y = document.createElement("IMG");
                            y.setAttribute("src",x[j]);
                            y.setAttribute("width",300);
                            y.setAttribute("height",300);
                            document.body.appendChild(y); 
        j++;                
        }
