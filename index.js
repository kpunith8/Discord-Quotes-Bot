require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
// Bot treats the strings with $ prefixed otherwise bot
// will process all the messages matching the string
const PREFIX = "$";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  const message = msg.content;
  // Don't reply if bot sending the messages
  if (msg.author.bot) return;

  // Check for special prefix $ to reply
  if (message.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    console.log(CMD_NAME, args);

    if (CMD_NAME === "welcome") {
      msg.channel.send("Welcome to the channel :tada:");
    }

    if (CMD_NAME === "fun") {
        msg.channel.send("Enjoy the life!!");
      }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
