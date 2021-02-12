module.exports = {
	func: function (msg, args) {
		let author = msg.author;
		let d = new Date(author.createdAt);
		msg.channel.send(`Hello, ${author.username} I am a bot. You created your acount on ${d.toDateString()}.`);
		msg.react("😊");
	},
	help: `Very simple command which sends a hello message and along with it
	the createdAt date of the user who sent message is sent.
	
	$hello`
}