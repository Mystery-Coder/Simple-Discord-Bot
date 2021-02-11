const fetch = require('node-fetch');



module.exports = async function (msg, args) {
	let JokeURL = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=single"

	if (args[0] !== undefined) {
		JokeURL += JokeURL + `&contains=${args[0]}`;
	}


	const response = await fetch(JokeURL);
	const jokes_JSON = await response.json();

	msg.channel.send(jokes_JSON.joke);

}