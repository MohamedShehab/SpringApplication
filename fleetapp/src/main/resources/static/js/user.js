
$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(user, status) {

			$('#txtIdEdit').val(user.id);
			$('#txtNameEdit').val(user.username);
			$('#txtPasswordEdit').val(user.password);
			
		});

		$('#editModal').modal();
	});
	
	


	
	
	
	
	$('.table #deleteButton').on('click', function(event) {

		event.preventDefault();
		
		var href = $(this).attr('href');
		
		$('#deleteModal #delRef').attr('href',href);

		$('#deleteModal').modal();
	});

});