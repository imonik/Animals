function getAnimals(){
	$('div').empty();

	$.ajax({
		url: '/animals.json',
		method: 'GET'
	}).then(function(animals){
		for (var animalIndex in animals){
			// console.log(actorIndex);
			// console.log(actors[actorIndex]);
			// console.log(actors);

			var p = $('<p>'); // <p></p>

			//one way
				// p.text(JSON.stringify(actors[actorIndex]))

			//another way
				// p.text("id: " + actors[actorIndex].id + ", actor name: " + actors[actorIndex].actor_name)

			//another way
				p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

				var bt = $('<button>'); //<button></button>
				bt.attr('class', 'delete');
				
				bt.text('delete'); //<button>delete</button>
				bt.attr('data-id', animals[animalIndex].id)
				//<button data-id="4">delete</button>
				p.append(bt);
			$('div').prepend(p);
		}
	})
}
