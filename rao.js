var Rao = function(selector) {
	this.selector = selector || null; 
 	this.element = null;
 	
};

//main selector
rao = function(selector){
	var elm = new Rao(selector);
	elm.init();
	if(selector.charAt(0) === '#'){
		return elm;
	}else {
		return elm["element"];
	}
	
}

// for initialization and selection
Rao.prototype.init = function(){
	if(this.selector.charAt(0) === '#'){
		this.element = document.getElementById(this.selector.substr(1));
	}else if(this.selector.charAt(0) === '.'){
		this.element = document.querySelectorAll(this.selector);	
	}
}


//for get/set value
Rao.prototype.val = function(currVal){
	return(currVal === undefined ? this.element.value : this.element.value = currVal);
};

// for append HTML
Rao.prototype.html = function(html){
	if(html === undefined){
		return this.element.innerHTML;
	}else{
		this.element.innerHTML = html;
	}
};

// for get/set text value
Rao.prototype.text = function(text){
	if(text === undefined){
		return this.element.textContent || this.element.innerHTML;
	}else{
		this.element.textContent = text;
	}
};

Rao.prototype.append = function(appendhtml){
	this.element.innerHTML = this.element.innerHTML + appendhtml;
};

Rao.prototype.prepend = function(prependtHtml){
	this.element.innerHTML = prependtHtml + this.element.innerHTML;
};


Rao.prototype.eventHandler = {
	events: [],
	bindEvent: function(event, callback, target ){
		//remove events
		//target.removeEventListener(event, callback);
		this.unbindEvent(event, target);
		//add events
		target.addEventListener(event, callback, false);
		this.events.push({
			type : event,
			event :callback,
			target :target
		});
	},
	findEvent:function(event){
		return this.events.filter(function(eve){
			return (eve.type === event);
		},event)[0];
	},
	unbindEvent : function(event, target){
		var searchEvent = this.findEvent(event);
		if(searchEvent !== undefined){
			target.removeEventListener(event, searchEvent.event, false);
		}

		// update events
		this.events = this.events.filter(function(evt){
			return (evt.type !== event);
		},event);
	}


};
// on()
Rao.prototype.on = function(event, callback, target){
	var evt = this.eventHandler.bindEvent(event, callback, this.element);
}
//off()
Rao.prototype.off = function(event, callback, target){
	var evt = this.eventHandler.unbindEvent(event,this.element);
}

// for upper case
Rao.prototype.UPPER = function(){
		return (this.element.textContent || this.element.innerHTML).toUpperCase();
}

// for upper case
Rao.prototype.LOWER = function() {
		return (this.element.textContent || this.element.innerHTML).toLowerCase();
}


//set and get attribute 
Rao.prototype.attri = function(key, value){
	if(key !== undefined && value !== undefined){
		this.element.setAttribute(key,value);
	}else if(key !== undefined){
		return this.element.getAttribute(key);
	}	
}

//Hide and show element
Rao.prototype.in = function(){
	this.element.style.display = 'block';
}
Rao.prototype.out = function(){
	this.element.style.display = 'none';
}

//custom data get

Rao.prototype.Data = function(custom_data){
	if(custom_data !== undefined){
		return document.getElementById(this.element.getAttribute("id")).getAttribute(custom_data);	
	}
	
}

// copy right year
Rao.prototype.currentYear = function(){
	this.element.textContent = new Date().getFullYear();
}

//add or remove class
Rao.prototype.addClass = function(addclass){
	if(addclass !== undefined){
		this.element.className += " "+addclass;
	}	
}
Rao.prototype.removeClass = function(removeClass){
	if(removeClass !== undefined){
		this.element.classList.remove(removeClass);
	}
	
}

//trim method
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
Rao.prototype.trim = function(){
	return this.element == null ? "" : ( this.element + "" ).replace( rtrim, "" );
}
//think about this !
Rao.prototype.r = {
	trim : function(text){
		return this.element;
	}
}

//A universal object for external functions 
var r = {
	// speacial method rao_replace eg:- if you want to replce "Rao" to "dk" 
	//then it will directly replce by Dk 
	 rao_replace : function(str, before, after){
		return str.replace(before, function(before){
			if (before.charAt(0) === before.charAt(0).toUpperCase()) {
		    	return after.charAt(0).toUpperCase() + after.substr(1).toLowerCase();
			} else {
		    	return after.charAt(0).toLowerCase() + after.substr(1).toLowerCase();
			}	
		});
	},

	//for customize upper case formater
	upper:function(uppertxt, uppertxtcase) {
		if(uppertxt !== undefined){
			switch(uppertxtcase){
				case "1":
				return uppertxt.charAt(0).toUpperCase() + uppertxt.substring(1);
				break;

				case "1++":
				case ">1":
				var U_uppertxt='';
				uppertxtArray = uppertxt.split(" ");
				uppertxtArray.forEach(function(data){
					U_uppertxt += data.charAt(0).toUpperCase() + data.substring(1)+" ";
				});
				return U_uppertxt;
				break;

				default:
				return " 'Illegal modifier' "

			}
			
		}
	},

	//for browser
	browser:function(){
		var brw;
		if (navigator.userAgent.search("MSIE")) {
        	brw ="IE";
    	}else if (navigator.userAgent.search("Chrome")) {
        	brw ="Chrome";
    	}
		return brw;
	}
}


//find

// $this
//browser


//
Rao.prototype.ggg = function(){

}
