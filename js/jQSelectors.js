(function($){

	//1)
	var divs = $('.grid.grid-12');

	//2)
	var a = $(".nav a[href^='http']");

	//3)
	var inputs = $("input:radio, input:checkbox").not(":checked");

	//4)
	var emptyp = $("#text p:empty:first");

	//5)
	var itemNotSpan = $(".pagination-item:not(span)");


	divs.on("mouseenter", function(){
		$(this).css({'border': 'solid 2px red'});
	}); 

	a.on("mouseenter", function(){
		$(this).css({'border': 'solid 2px red'});
	});

	itemNotSpan.on("mouseenter", function(){
		$(this).css({'border': 'solid 2px red'});
	}); 

	emptyp.remove();
 

})(jQuery);