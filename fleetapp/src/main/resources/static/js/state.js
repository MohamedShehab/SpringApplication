$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(State, status) {

			$('#idEdit').val(State.id);
			$('#ddlCountryEdit').val(State.countryid);
			$('#capitalEdit').val(State.capital);
			$('#codeEdit').val(State.code);
			$('#nameEdit').val(State.name);
			$('#detailsEdit').val(State.details);
			

		});

		$('#editModal').modal();
	});
	
	


	$('.table #detailsButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(State, status) {

			$('#idDetails').val(State.id);
			$('#ddlCountryDetails').val(State.countryid);
			$('#nameDetails').val(State.name);
			$('#detailsDetails').val(State.details);
			$('#lastModifiedByDetails').val(State.lastModifiedBy);
			// $('#lastModifiedDateDetails').val(State.lastModifiedDate.substr(0,19).replace("T"," "));
			

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