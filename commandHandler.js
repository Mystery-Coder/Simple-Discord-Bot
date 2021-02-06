const fs = require('fs');

module.exports = function (msg) {

	let commands = {};

	fs.readdirSync("commands").forEach(file => {
		command_name = file.replace(".js", "");
		commands[command_name] = require(`./commands/${file}`);
	})
	// console.log(commands)

	const args = msg.content.split(/\s/);
	// console.log(args)
	let command = args.shift();
	// console.log(args)

	let regex = /^\$/;


	if (regex.test(command)) {
		command = command.replace(regex, "");

		if (Object.keys(commands).includes(command)) {
			commands[command](msg, args);
		}
	}
}