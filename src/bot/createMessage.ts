import Discord from "discord.js";
import { notifyCampusCircleBot } from "../controllers";

async function createMessage(msg: Discord.Message) {
  const message = msg.content;
  const parentChannel =
    msg.channel instanceof Discord.ThreadChannel ? msg.channel.parent : null;

  if (message.match(/hellow/i) && parentChannel?.name?.match(/circle/i)) {
    await notifyCampusCircleBot(msg);
  }
  //authorRolesName: Operaciones - Soporte,DEV.F Team,Tech,sensei,alumni,@everyone
}

export default createMessage;
