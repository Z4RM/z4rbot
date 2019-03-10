const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
 
client.login('NTUzOTkyODY4MDE3MDc4Mjg1.D2ZBSA.31fzp-sIkqHmgAY5g-lmPNzyUX8');
 
client.on('ready', () => {
    client.user.setPresence({game: {name: '!ZBhelp'}});
    console.log("Bot Ready !");
});
