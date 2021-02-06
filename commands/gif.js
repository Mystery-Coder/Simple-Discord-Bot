const fetch = require('node-fetch');

let url = "https://api.tenor.com/v1/search?key=PCFO5LT0NBPS&limit=4&contentfilter=high&q=";



module.exports = async function (msg, args) {
	let s_url = args[0] ? url + args[0] : url + "welcome";

	let response = await fetch(s_url);
	let data = await response.json();
	let r_idx = Math.floor(Math.random() * data.results.length)
	let gif_url = data.results[r_idx].url;

	msg.channel.send(gif_url);

}