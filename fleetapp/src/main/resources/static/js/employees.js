$('#photoButton').on('click', function(e){
	e.preventDefault();
	params = {
		targetUrl: 'change_photo.php?action=save',
		action: 'save'
		
	};
	saveCropImage(params);
});   


$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(employee, status) {

			$('#txtIdEdit').val(employee.id);
			$('#ddlTitleEdit').val(employee.title);
			$('#txtInitialsEdit').val(employee.initials);
			$('#txtSSNEdit').val(employee.socialSecurityNumber);
			$('#txtFirstnameEdit').val(employee.firstname);
			$('#txtLastnameEdit').val(employee.lastname);
			$('#txtOthernameEdit').val(employee.othername);
			$('#ddlGenderEdit').val(employee.gender);
			$('#ddlNationalityEdit').val(employee.nationality);
			$('#txtAddressEdit').val(employee.address);
			$('#txtDateOfBirthEdit').val(employee.dateOfBirth);
			$('#txtHireDateEdit').val(employee.hireDate);
			$('#ddlStateEdit').val(employee.stateid);
			$('#txtCityEdit').val(employee.city);
			$('#txtPhoneEdit').val(employee.phone);
			$('#txtMobileEdit').val(employee.mobile);
			$('#ddlMaritalStatusEdit').val(employee.maritalStatus);
			$('#txtEmailEdit').val(employee.email);
			$('#ddlJobTitleEdit').val(employee.jobtitleid);
			$('#ddlEmployeeTypeEdit').val(employee.employeetypeid);
			$('#fupImageEdit').val(employee.photo);
			

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