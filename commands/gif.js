const fetch = require('node-fetch');

let url = "https://api.tenor.com/v1/search?key=PCFO5LT0NBPS&limit=4&contentfilter=high&q=";

function search_sum(arr) {
	let s = "";
	arr.forEach(el => {
		// console.log(el)
		if (arr.indexOf(el) !== arr.length - 1) {
			s += el + "%20";
		} else {
			s += el;
		}
	})

	return s;
}

module.exports = async function (msg, args) {

	let s = search_sum(args) ? search_sum(args) : "welcome";
	let s_url = url + s;

	// console.log(s)
	let response = await fetch(s_url);
	let data = await response.json();
	let r_idx = Math.floor(Math.random() * data.results.length)
	let gif_url = data.results.length > 1 ? data.results[r_idx].url : "Not Found";

	s = s.replace(/\%20/g, " ");
	msg.channel.send(gif_url);
	msg.channel.send(`${msg.author.username} searched for '${s}'.`)



}