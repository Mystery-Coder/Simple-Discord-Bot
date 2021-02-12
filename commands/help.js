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

module.exports = async function (msg, args) {
	if (args.length === 0) {
		msg.channel.send({ embed: exampleEmbed });
		return;
	}

	let help_command = args[0]

	if (help_command === "help") {
		msg.channel.send({ embed: exampleEmbed });
		return;
	}


	if (existsSync(`help_docs\\${help_command}.txt`)) {
		let help_txt = readFileSync(`help_docs\\${help_command}.txt`).toString();

		msg.channel.send("```" + help_txt + "```");
	} else {
		msg.channel.send("Not a valid command.")
		msg.react("🤣");
	}
}