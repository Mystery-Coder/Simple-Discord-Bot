const { readdirSync, existsSync } = require('fs');

let fields_arr = [];


readdirSync('commands').forEach(name => {
	name = name.replace(".js", "");
	if (name !== "help") {
		let obj = {
			name: "$" + name,
			value: require("./" + name).help.split("\n")[0],
			inline: true
		};

		fields_arr.push(obj);
	}

})

//**************************** */

//Special
fields_arr.push({
	name: "Note",
	value: `For help on specific command type $help <command>.
	Ex: $help hello. 
	Also you can DM me to execute commands.`
})


//Special😉
fields_arr.push({
	name: "Number of Commands.",
	value: `${fields_arr.length} ($help is included)`,
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


module.exports.func = async function (msg, args) {
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

