module.exports = function (msg, args) {
	let d = new Date(msg.member.user.createdAt);
	msg.channel.send(`Hello, ${msg.member.user.username} I am a bot. You created your acount on ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
}