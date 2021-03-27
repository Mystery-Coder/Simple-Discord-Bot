const fs = require('fs');

let commands = {};

fs.readdirSync("commands").forEach(file => {
	command_name = file.replace(".js", "");
	commands[command_name] = require(`./commands/${command_name}`).func;
})


module.exports = function (msg) {


	if (msg.content === "Hello, FirstBot") {
		msg.channel.send(`Hi, ${msg.author.username} I am watching and learning`);
		msg.react("👍")
		return;
	}

	if (msg.content === "FirstBot is an idiot") {
		msg.reply("Only people who can't be first say that.👏👏");
		msg.react("😲")
		return;
	}


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