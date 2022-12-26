// Fetch and display data

async function getPokemon() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
	const data = await response.json();
	const pokemonName = data.name;
	const pokemonMoves = data.moves;
	const pokemonMovesList = document.createElement('ul');
	pokemonMovesList.innerHTML = `<h1>${pokemonName}</h1>`;
	for (let i = 0; i < pokemonMoves.length; i++) {
	  pokemonMovesList.innerHTML += `<li>${pokemonMoves[i].move.name}</li>`;
	}
	document.body.appendChild(pokemonMovesList);
  }
  getPokemon();

//   ------------------------


// Query document and output element content

  var articles = document.getElementsByTagName('article');
var output = [];
for (var i = 0; i < articles.length; i++) {
  var article = articles[i];
  var title = article.getElementsByTagName('h4')[0]
  var paragraph = article.getElementsByTagName('p')[0]
  output.push({title: title, paragraph: paragraph});
}
console.log(output);

// squers

#container{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
  }
  #square-one{
	height: 200px;
	width: 200px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items:center
  }
  
  #square-two{
	height: 50px;
	width: 50px;
	background-color: blue;
  }
  
  #square-three-container{
	position: absolute;
  }
  
  #square-three{
	height: 100px;
	width: 100px;
	background-color:wheat;
	opacity: 0.5;
  }