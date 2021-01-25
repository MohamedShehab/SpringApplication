$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(JobTitle, status) {

			$('#idEdit').val(JobTitle.id);
			$('#descriptionEdit').val(JobTitle.description);
			$('#detailsEdit').val(JobTitle.details);
			
			

		});

		$('#editModal').modal();
	});
	
	


	$('.table #detailsButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(JobTitle, status) {

			$('#idDetails').val(JobTitle.id);
			$('#descriptionDetails').val(JobTitle.description);
			$('#detailsDetails').val(JobTitle.details);
			
			$('#lastModifiedByDetails').val(client.lastModifiedBy);
			$('#lastModifiedDateDetails').val(State.lastModifiedDate.substr(0,19).replace("T"," "));
			

		});

		$('#detailsModal').modal();
	});
	
	
	
	$('.table #deleteButton').on('click', function(event) {

		event.preventDefault();
		
		var href = $(this).attr('href');
		
		$('#deleteModal #delRef').attr('href',href);

		$('#deleteModal').modal();
	});

});