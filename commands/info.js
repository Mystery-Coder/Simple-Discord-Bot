let infoEmbed = {
	color: 0x006a36,
	author: {
		name: 'FirstBot',
	}
}

const isInline = false;

module.exports = function (msg, args) {
	infoEmbed.title = `Info about ${msg.author.username}`;
	let info = [];

	info.push({
		name: "Username",
		value: msg.author.username,
		inline: isInline
	});


	info.push({
		name: "Is a bot?",
		value: msg.author.bot ? "Is a bot." : "Not a bot.",
		inline: isInline
	});


	let d = new Date(msg.member.user.createdAt);
	// d = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
	info.push({
		name: "Account Created On",
		value: d.toDateString(),
		inline: isInline
	})

	infoEmbed.fields = info;

	msg.channel.send({ embed: infoEmbed });
}