$(document).ready(function() {
$("#add").click(function() {
	if ( $.trim( $('#addForm').val() ) === '' ) {
		
		return;
	}
	else {
    addItem();
	}
});


	

//add item
	function addItem(){
		var itemToAdd = $("#addForm").val();
		var createItem = 		
		
		'<div class="add-item"><div class="checkcheckcheck"><input type="checkbox" class="checkbox"></div><input type="text" class="item-field" value=" '+itemToAdd + ' "></div>';
		
		$("#shopping-list").append(createItem);
		$("#addForm").attr("placeholder", "Add an item").val("");
		$('input.check').change(function(){
		$(this).siblings('itemToAdd').toggleClass('strike');
		});
	}

//remove Item
	$("#remove").click(function(){
		$("input:checked").closest(".add-item").fadeOut(500);
	});

//toggle between line crossed off and on
	$('#shopping-list').on('change','input[type=checkbox]',function(){
    	var myInput = $(this).parent().siblings('input[type=text]');
    	if ($(this).is(':checked')) {
    		$(myInput).css('textDecoration','line-through');
    	}
    	else{
    		$(myInput).css('textDecoration','none');
    	}
	});
	
		
});
