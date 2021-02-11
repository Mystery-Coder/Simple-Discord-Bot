const fetch = require('node-fetch');



module.exports = async function (msg, args) {
	let user_input = args[0];

	let TriviaURL = "http://numbersapi.com";

	// let q = "random";

	if (isNaN(user_input) === true && args.length !== 0) {
		msg.channel.send("Please provide a number 👍");
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


}