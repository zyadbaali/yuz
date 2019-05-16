const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("564169560253530114")
setInterval(function() {
channel.send(`hla sbab`);
}, 30)
})

client.login(process.env.BOT_TOKEN);