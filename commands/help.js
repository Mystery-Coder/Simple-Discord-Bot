const { readdirSync, readFileSync, existsSync } = require('fs');

let fields_arr = [];

readdirSync('commands').forEach(name => {
	name = name.replace(".js", "");

	let obj = {
		name,
		value: "$" + name,
		inline: true
	};

	fields_arr.push(obj);
})

//Special😉
fields_arr.push({
	name: "Number of Commands.",
	value: fields_arr.length,
})


fields_arr.push({
	name: "Note",
	value: `For help on specific command type $help <command>. \nEx: $help hello`
})


const exampleEmbed = {
	color: 0x0096ee,
	title: 'Help for FirstBot',
	author: {
		name: 'FirstBot',
	},
	description: 'This shows the commands available for FirstBot',
	fields: fields_arr
};

module.exports = {
	func: async function (msg, args) {
		let help_command = args[0]

		if (args.length === 0 || help_command === "help") {
			msg.channel.send({ embed: exampleEmbed });
			return;
		}

		let path = `commands\\${help_command}.js`;
		// console.log(require.main.path)
		if (existsSync(path)) {
			let help_txt = require(`./${help_command}`).help;

			msg.channel.send("```" + help_txt + "```");
		} else {
			msg.reply("Not a valid command.")
			msg.react("🤣");
		}
	}
}