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

commands_arr.push({
	name: "Number of Commands.",
	value: commands_arr.length,
	inline: true
})


const exampleEmbed = {
	color: 0x0096ee,
	title: 'Help for FirstBot',
	author: {
		name: 'FirstBot',
	},
	description: 'This shows the commands available for FirstBot',
	fields: commands_arr
};

module.exports = async function (msg, args) {
	msg.channel.send({ embed: exampleEmbed });
}