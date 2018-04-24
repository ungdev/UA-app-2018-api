const setting = require('./BotSetting.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');

const bot = new Discord.Client();

bot.on("ready", async() => {
  console.log(`READY ${bot.user.username}`);
  bot.generateInvite(['ADMINISTRATOR'])
  .then(link => {
    console.log(`Generated bot invite link: ${link}`);
  });
});


bot.on("message", async message => {
  const arrayTxt = message.content.split(" ");
  let tag = arrayTxt.shift();
  if (message.author.bot) return;
  if (message.channel.type === "dm" && setting.prefix === tag[0] && setting.staffTag.includes(tag.slice(1))) {
    const msg = arrayTxt.join(" ");
    tag = tag.replace("!","#");
    const text = {
	"fallback": "Message do bot",
	"pretext": `Message pour ${tag}`,
	"color": "#00FFFF",
	"fields": [
		{
			"title": "Info",
			"value": `Nom: ${message.author.username}\nMessage: ${msg}`,
			"short": false
		}
	]
  };
    const setting = {method: "POST", body: JSON.stringify(text), headers: { 'Content-Type': 'application/json' }}
    fetch("https://hooks.slack.com/services/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",setting);

    message.channel.send("Votre message a été envoyé aux respos :wink:");

  } else if (message.channel.type === "dm"){
      message.channel.send("Utilise une commande avec `![commande]` pour communiquer avec le staff\nRappel des commandes: staff, lol, hs, ow")
  }
})
bot.login(setting.token);
