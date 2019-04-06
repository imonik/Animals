$('#update_animal').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var ci = $( "#update_animal input[name='animal_id']" ).val();

    var cn = $( "#update_animal input[name='animal_name']" ).val();

	$.ajax({
		url: '/animals-update/' + ci + '?_method=PUT',
		method: 'POST',
		data: {animal_name : cn}
	}).then(function(message){
		getAnimals();
	});

});