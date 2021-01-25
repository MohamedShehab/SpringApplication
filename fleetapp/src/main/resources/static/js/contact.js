
$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(contact, status) {

			$('#txtIdEdit').val(contact.id);
			$('#txtFirstnameEdit').val(contact.firstname);
			$('#txtLastnameEdit').val(contact.lastname);
			$('#txtEmailEdit').val(contact.email);
			$('#txtMobileEdit').val(contact.mobile);
			$('#txtPhoneEdit').val(contact.phone);
			$('#txtRemarksEdit').val(contact.remarks);
			
			
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