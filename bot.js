const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commandHandler')

require('dotenv').config();

function clientReady() {
	client.user.setPresence({ activity: { name: 'and listening to $help' } })

	console.log(`Bot online! ${client.user.username}`);
}

client.on('ready', clientReady)
client.login(process.env.BOT_TOKEN);

client.on("message", commandHandler)