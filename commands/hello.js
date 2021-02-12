module.exports = function (msg, args) {
	let author = msg.author;
	let d = new Date(author.createdAt);
	msg.channel.send(`Hello, ${author.username} I am a bot. You created your acount on ${d.toDateString()}.`);
	msg.react("😊");
}