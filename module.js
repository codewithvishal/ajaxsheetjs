//////////////////////////////////////////////////////
//                                                  //
//  Developed by: Vishal Chopra                     //
//  Website: vishalchopra.me                        //
//  Github: http://github.com/vishalchopra13        //
//  Facebook: http://www.facebook.com/vishalchopra13 //
//  Twitter: http://twitter.com/vishalchopra13      //
//  Email: hello@vishalchopra.me                    //
//                                                  //
//////////////////////////////////////////////////////

var AjaxSheet = (function(){
    function AjaxSheet(){
        this.data = false;
        //console.log("This is a constructor!");
    }
    
    // To save the form value into the users local storage
    function save(data){
   		localStorage.setItem('data', JSON.stringify(data));
        console.log("This is a save function");
    };
    
    function load(item){
    	// Load the data from the local storage
        this._data = JSON.parse(localStorage.getItem(item));
        console.log("This is a load function");
    };
    
    // send post request
    AjaxSheet.prototype.get = function(getUrl, data_type, callback){
    	$.ajax({
        	type: 'GET',
            url: getUrl,
            dataType: data_type,        
            success: function(data){
                save(data);  // save the data into the local storage
                load('data'); // load the data from the local storage
                callback(data); // callback function
            },
            error: function(e){
            	console.log(e); // log the error into the console
            }
        });
        return this;
    };
    
    AjaxSheet.prototype.post = function(postUrl, data_type, dataTosend, callback){
        $.ajax({
            type: 'POST',
            url: postUrl,
            dataType: data_type,
            data: dataTosend,
			success: function(response){
            	callback(response);
            }
        });
        return this;
    };
    
    AjaxSheet.prototype.clearStorage = function(item){
    	var item_is_array = Array.isArray(item);
        if(item_is_array === false){
    		localStorage.removeItem(item);
        } else {
        	for(var i = 0; i < item.length; i++){
            	localStorage.removeItem(item[i]);
            }
        }
        return this;
    };
       
    return AjaxSheet;
})();


//var me = new AjaxSheet();
//me.post('https://docs.google.com/forms/d/e/1FAIpQLSfdquNEMR9AqeNhUtd10-BGE9pgWCpwvgG4TJ24psnR2reotQ/formResponse', 'JSON', {"entry.1306333158": "vishalchopra",  "entry.2085862806": "vishalchopra@gmail.com", "entry.1460306510":
//                            "9836929535", "entry.1942733698": "525" });