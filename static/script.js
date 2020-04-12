$(document).ready(function () {
	$(document).on('click', '.checkbox', function(){
		

		$(this).parent().addClass('completed');
		$(this).attr('disabled', true);
	
		uid = $(this).attr('data-uid');
		$.get("/api/complete/" + uid);
	});

	$(document).on('click', '.remove', function(){
		$(this).parent().remove();
	});

});

$(document).ready(async function() {
	let response = await fetch("/counter", {method: "GET"})
	console.log("пока работает")
});
