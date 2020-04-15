const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const pre = "£";
const quotes = JSON.parse(fs.readFileSync("loli.json"));
const len = quotes.quote.length;
salon = [];

bot.login("NjY2MDAwMDcwNDE1NjEzOTcz.XpYBTA.7P9xub7pkxA7pF9r-0VH2zAvCYw");

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	console.log(len);
});


bot.on('message', msg => {
	if(msg.content === pre + `loli` && salon.includes(msg.channel.id)){
		i = Math.floor(Math.random()*len);
		msg.channel.send("Une loli est passée !");
		msg.channel.send("Il faut regarder : " + quotes.quote[i]);
	}
});

bot.on('message', msg => {
	if(msg.author.id !== "185352234580574208") return;
	if(msg.content === pre + `here`){
		if (salon.includes(msg.channel.id)) return;
		else {
			salon.push(msg.channel.id);
			msg.reply("Lecture set ici");
		}
		console.log(salon);
	}
});
