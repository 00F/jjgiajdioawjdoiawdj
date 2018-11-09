const Discord = require("discord.js");
const client = new Discord.Client();
const developers = ['343743154429755392'];
client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '712') {
  let channel = client.channels.get('458667530483924993');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});






client.login(process.env.BOT_TOKEN);
