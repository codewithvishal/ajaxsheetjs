var AjaxSheet = (function(){
    function AjaxSheet(){
        //console.log("This is a constructor!");
    }
    
    // To save the form value into the users local storage
    function save(data){
   	localStorage.setItem('data', JSON.stringify(data));
    };
    
    function load(item){
    	// Load the data from the local storage
        this._data = JSON.parse(localStorage.getItem(item));
    };
    
    // send post request
    AjaxSheet.prototype.get = function(getUrl, data_type, callback){
    	$.ajax({
            type: 'GET',
            url: getUrl,
            dataType: data_type,        
            success: function(data){
               // save(data);  // save the data into the local storage
               // load('data'); // load the data from the local storage
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
