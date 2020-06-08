const Discord = require('discord.js');

const client = new Discord.Client();

 
const commands = new discord.command.CommandGroup({
  defaultPrefix: 'gc ' // You can customize your default prefix here.
});

commands.raw('snitchrate', async (message) => {
  // We're going to fetch a fact from the cat-fact API.
  var n = Math.floor(Math.random() * 101);
  if (n == 0) await message.reply(`Sei snitch al ${n}% Sei DIO`);
  else {
    if (n <= 20)
      await message.reply(`Sei snitch al ${n}% Bravo, posso fidarmi di te`);
    else {
      if (n < 50)
        await message.reply(`Sei snitch al ${n}% Sei sulla buona strada`);
      else {
        if (n == 100)
          await message.reply(`Sei snitch al ${n}% Peggio di brumotti`);
        else {
          if (n >= 80)
            await message.reply(`Sei snitch al ${n}% Non ti fai schifo?`);
          else {
            if (n > 50)
              await message.reply(
                `Sei snitch al ${n}% Sei sulla cattiva strada`
              );
            else await message.reply(`Sei snitch al ${n}% Normie`);
          }
        }
      }
    }
  }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
