$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(client, status) {

			$('#txtIdEdit').val(client.id);
			$('#txtNameEdit').val(client.name);
			$('#txtDetailsEdit').val(client.details);
			$('#txtWebsiteEdit').val(client.website);
			$('#txtAddressEdit').val(client.address);
			$('#ddlStateEdit').val(client.stateid);
			$('#ddlCountryEdit').val(client.countryid);
			$('#txtPhoneEdit').val(client.phone);
			$('#txtMobileEdit').val(client.mobile);
			$('#txtEmailEdit').val(client.email);
			$('#txtCityEdit').val(client.city);
			

		});

		$('#editModal').modal();
	});
	
	


	$('.table #detailsButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(client, status) {

			$('#idDetails').val(client.id);
			$('#nameDetails').val(client.name);
			$('#detailsDetails').val(client.details);
			$('#websiteDetails').val(client.website);
			$('#addressDetails').val(client.address);
			$('#ddlStateAdd').val(client.stateid);
			$('#ddlCountryDetails').val(client.countryid);
			$('#phoneDetails').val(client.phone);
			$('#mobileDetails').val(client.mobile);
			$('#emailDetails').val(client.email);
			$('#cityDetails').val(client.city);
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