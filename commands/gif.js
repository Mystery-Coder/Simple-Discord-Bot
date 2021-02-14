const fetch = require('node-fetch');

let url = "https://api.tenor.com/v1/search?key=PCFO5LT0NBPS&limit=4&contentfilter=high&q=";

function search_sum(arr) {
	let s = "";
	arr.forEach(el => {
		s += el + " ";
	})

	return s;
}

module.exports.func = async function (msg, args) {

	let s = search_sum(args) ? search_sum(args) : "coding train";
	let s_url = url + s;

	let response = await fetch(s_url);
	let data = await response.json();
	let r_idx = Math.floor(Math.random() * data.results.length)
	let gif_url = data.results.length > 1 ? data.results[r_idx].url : "Not Found";

	msg.channel.send(gif_url);
	s[s.length - 1] = "";
	msg.channel.send(`${msg.author.username} searched for '${s}'.`)



};

module.exports.help = `The $gif command queries the Tenor GIF API for a few gifs and picks a random one. 
If no search words are provided after the command it sends a random
gif related to 'coding train'. Ex: $gif

If search words are provided it will send a related random gif.
Ex: $gif welcome. `