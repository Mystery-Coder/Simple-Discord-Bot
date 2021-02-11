module.exports = function (msg, args) {
	let d = new Date(msg.author.createdAt);
	msg.channel.send(`Hello, ${msg.author.username} I am a bot. You created your acount on ${d.toDateString()}. 
	Also your last message was '${msg.author.lastMessage.content}'`);
}