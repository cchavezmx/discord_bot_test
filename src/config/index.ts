import dotenv from "dotenv";
const envFound = dotenv.config();
if (!envFound) {
  // If no .env file.
  throw new Error("Couldn't find .env file");
}
export default {  
  api: {
    devf: process.env.DEVF_API,
    devfAuthLogin: process.env.DEVF_AUTH_LOGIN,
    devfAuthPassword: process.env.DEVF_AUTH_PASSWORD,
  },
  discord: {
    botToken: process.env.DISCORD_BOT_TOKEN,
  },  
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
};