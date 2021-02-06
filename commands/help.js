const fs = require('fs');

let commands_arr = [];

fs.readdirSync('commands').forEach(name => {
	name = name.replace(".js", "");

	let obj = {
		name,
		value: "$" + name,
		inline: true
	};

	commands_arr.push(obj);
})


const exampleEmbed = {
	color: 0x0096ee,
	title: 'Help for FirstBot',
	author: {
		name: 'TheMystery1197',
	},
	description: 'This shows the commands available for FirstBot',
	fields: commands_arr
};

module.exports = async function (msg, args) {
	msg.channel.send({ embed: exampleEmbed });
}