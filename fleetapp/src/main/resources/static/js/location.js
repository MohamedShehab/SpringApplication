$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(location, status) {

			$('#idEdit').val(location.id);
			$('#descriptionEdit').val(location.description);
			$('#cityEdit').val(location.city);
			$('#addressEdit').val(location.address);
			$('#ddlCountryEdit').val(location.countryid);
			$('#ddlStateEdit').val(location.stateid);
			$('#detailsEdit').val(location.details);
			

		});

		$('#editModal').modal();
	});
	
	


	$('.table #detailsButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(location, status) {

			$('#idDetails').val(location.id);
			$('#descriptionDetails').val(location.description);
			$('#cityDetails').val(location.city);
			$('#addressDetails').val(location.address);
			$('#detailsDetails').val(location.details);
			$('#ddlCountryDetails').val(location.countryid);
			$('#ddlStateDetails').val(location.stateid);
			$('#lastModifiedByDetails').val(location.lastModifiedBy);
			$('#lastModifiedDateDetails').val(location.lastModifiedDate.substr(0,19).replace("T"," "));
			

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