import Discord from "discord.js";
import config from "./config";
import { createMessage } from "./bot";
import LoggerInstance from "./lib/logger";
// Create a client
var bot = new Discord.Client({
  intents: 65139,
  presence: {
    status: "online",    
  },
});

// This code will run once the bot has started up.
bot.once("ready", function () {
  // Accede a la lista de canales después de que el bot esté listo
  LoggerInstance.info("Bot is ready!");
});
// This code will run once the bot has disconnected from Discord.
bot.on("disconnected", function () {
  // alert the console
  LoggerInstance.error("Bot has disconnected!");

  // exit node.js with an error
  process.exit(1);
});

bot.on("messageCreate", async function (msg) {
 await createMessage(msg);
});

// Login (replace these auth details with your bot's)
bot.login(config.discord.botToken);
