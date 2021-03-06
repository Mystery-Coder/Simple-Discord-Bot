let infoEmbed = {
	color: 0x006a36,
	author: {
		name: 'FirstBot',
	}
}

const isInline = false;



module.exports.func = function (msg, args) {

	let first_mention = msg.mentions.users.first();

	let user_to_use = first_mention === undefined ? msg.author : first_mention;
	// console.log(!first_mention);


	infoEmbed.title = `Info about ${user_to_use.username}`;
	let info = [];

	info.push({
		name: "Username",
		value: user_to_use.username,
		inline: isInline
	});


	info.push({
		name: "Is a bot?",
		value: user_to_use.bot ? "Is a bot." : "Not a bot.",
		inline: isInline
	});


	let d = new Date(user_to_use.createdAt);
	// d = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
	info.push({
		name: "Account Created On",
		value: d.toDateString(),
		inline: isInline
	})

	infoEmbed.fields = info;

	msg.channel.send({ embed: infoEmbed });
}



module.exports.help =
	`The info command will provide basic information about the user 
who sent the message. That is, $info
Information like created account at date, if user is a bot, etc.

Also if any @mention is present it will provide the information of 
the first @mention.
Ex: $info @User#0000`;