$('document').ready(function() {

	$('table #editButton').on('click', function(event) {

		event.preventDefault();

		// countries/findById/>id=1

		var href = $(this).attr('href');

		$.get(href, function(Country, status) {

			$('#idEdit').val(Country.id);
			$('#descriptionEdit').val(Country.description);
			$('#capitalEdit').val(Country.capital);
			$('#codeEdit').val(Country.code);
			$('#continentEdit').val(Country.continent);
			$('#nationalityEdit').val(Country.nationality);

		});

		$('#editModal').modal();
	});
	
	
	$('table #deleteButton').on('click', function(event) {

		event.preventDefault();
		
		var href = $(this).attr('href');
		
		$('#confirmDeleteButton').attr('href',href);

		$('#deleteModal').modal();
	});

});