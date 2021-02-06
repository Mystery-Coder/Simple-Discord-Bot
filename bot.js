const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commandHandler')


function clientReady() {
	console.log(`Bot online! ${client.user.username}`);
}

client.on('ready', clientReady)
client.login("Nzc1MTgyNzc0MjE0NTkwNTE1.X6inNw.gGyGgHi1EcSBJwJXgug1zWX14cM");

client.on("message", commandHandler)