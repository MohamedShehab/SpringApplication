
$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(supplier, status) {

			$('#txtIdEdit').val(supplier.id);
			$('#txtNameEdit').val(supplier.name);
			$('#txtDetailsEdit').val(supplier.details);
			$('#txtWebsiteEdit').val(supplier.website);
			$('#txtAddressEdit').val(supplier.address);
			$('#ddlStateEdit').val(supplier.stateid);
			$('#ddlCountryEdit').val(supplier.countryid);
			$('#txtCityEdit').val(supplier.city);
			$('#txtPhoneEdit').val(supplier.phone);
			$('#txtMobileEdit').val(supplier.mobile);
			$('#txtEmailEdit').val(supplier.email);
			
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