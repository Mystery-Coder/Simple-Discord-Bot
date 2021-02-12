const fetch = require('node-fetch');



module.exports = {
	func: async function (msg, args) {
		let user_input = args[0];

		let TriviaURL = "http://numbersapi.com";

		// let q = "random";

		if (isNaN(user_input) === true && args.length !== 0) {
			msg.channel.send("Please provide a number");
			msg.react("👍");
			return;
		}

		let q = isNaN(user_input) === false ? user_input : "random"

		// if (isNaN(user_input) === false) {
		// 	q = user_input;
		// }

		TriviaURL += "/" + q;

		// console.log(TriviaURL)
		let res = await fetch(TriviaURL);

		let fact = await res.text();

		msg.channel.send(fact)


	},
	help: `The trivia command queries the http://numbersapi.com/ API for simple trivia on
	numbers or anything in general.
	
	If a number is provided, the bot will send a fact on that number. Ex: $trivia 231
	If nothing is provided it will give a random fact i.e $trivia`
}