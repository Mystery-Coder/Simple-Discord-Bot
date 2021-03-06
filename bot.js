const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commandHandler')

require('dotenv').config();

function clientReady() {
	client.user.setPresence({
		activity: {
			type: "LISTENING",
			name: '$help'
		},
		status: 'online'
	})

	console.log(`Bot online! ${client.user.username}`);
}

client.on('ready', clientReady)

client.login(process.env.BOT_TOKEN);

client.on("message", commandHandler)