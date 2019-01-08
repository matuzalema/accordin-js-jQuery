'use strict'; 
(function(){ 
	
	var accordionVanillaJS = function(){
		
		var headers = document.querySelectorAll('#accordion-vanillajs h3');
		
		var headerClickCallback = function(){
			this.classList.add('active');
			
			for(var i = 0; i < headers.length; i++){
				if(headers[i].classList.contains('active') && headers[i] != this){
					headers[i].classList.remove('active');
				}
			}
		};
		
		
		for(var i = 0; i < headers.length; i++){
			headers[i].addEventListener('click', headerClickCallback);
		}
	};
	
	accordionVanillaJS();

// =========== jquery ========================

	var accordionJQuery = function(){
		var headersJQ = $('#accordion-jquery > h3');

		headersJQ.click(function(){
			 var $this = $(this);
			if (headersJQ.hasClass('active') && headersJQ != $this){
				headersJQ.removeClass('active');
			}
			$this.addClass('active');
		});
	};
	
	accordionJQuery();
})(); 