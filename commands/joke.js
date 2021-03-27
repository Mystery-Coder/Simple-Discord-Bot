const fetch = require('node-fetch');



module.exports.func = async function (msg, args) {
	let JokeURL = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=single"

	if (args[0] !== undefined) {
		JokeURL += `&contains=${args[0]}`;
	}


	const response = await fetch(JokeURL);
	const jokes_JSON = await response.json();

	await msg.channel.send(jokes_JSON.joke);
}



module.exports.help = `The joke command queries the JokeAPI for a random joke.

If any words are provided after the command it will query the JokeAPI
for those keywords.
Ex: $joke apples

If nothing is provided the bot will send a random joke.
That is, $joke.`