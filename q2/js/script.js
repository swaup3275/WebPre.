$(document).ready(function() {


	$('#add-item').on('click',function(){
		var item = $('#itemVal').val();
		if(item == item.match(/^[a-z A-Z]+$/)) {
			var count=0;
			$('li').each(function(){
				if($(this).html() === item) {
					count++;
				}
			})
			if(count===0) {
				$('.result').html('Item Added Successfully');
				$('.list1').append('<li>'+item+'</li>');
			}
			else {
				$('.result').html('');
				alert("Item already exists.");
			}
		}
		else {
			$('.result').html('');
			alert("Item name can only have alphabets.");
		}
	});

})



