$("ul").on("click","li",function(){ //click() doesn't work on new li items. use on(). Also use a middle argument where
	$(this).toggleClass("checked"); //the middle argument is the subelement to perform action on. here --> li that is in ul
});


//Add new notes
$("input").on("keypress",function(event){
	if(event.which == 13 && ($(this).val()!="")){
				$("ul").append("<li><span class=\"fa fa-trash\"></span> "+$("input").val()+"</li>");
				$(this).val("");
	}
});

//Remove item from list
$("ul").on("click","span",function(){
		// alert("clicked on X");
		event.stopPropagation(); //this will prevent the phenomenon "event bubbling" i.e. events of parent tags won't automatically execute
		$(this).parent().fadeOut(function(){
			$(this).remove();
		})
	});

// $("button").click(function(){
// 	console.log($("li"));
// })


//show delete option on hover
$("ul").on("mouseover","li",function(){
	$(this).find("span").addClass("span");
})

//hide delete option off hover
$("ul").on("mouseout","li",function(){
	$(this).find("span").removeClass("span");
})


//hide or show Add new todo
$("img").click(function(){
	$("input").toggleClass("hide_show");
})