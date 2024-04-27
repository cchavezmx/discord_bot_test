import Discord from "discord.js";
import { campusService } from "../services";
import LoggerInstance from "../lib/logger";

async function notifyCampusCircleBot(msg: Discord.Message) {
  try {
    const authorRolesName = msg.member.roles.cache.map((r) => r.name);

    if (authorRolesName.includes("sensei")) {
      const messages = await Promise.resolve(
        msg.channel.messages.fetch({ limit: 4 })
      );
      const isFirstMessages = messages.size;
      if (isFirstMessages <= 3 && isFirstMessages > 1) {
        const thread = msg.channel.id;
        // the parent channel is a thread channel
        const channel = 
          msg.channel instanceof Discord.ThreadChannel
            ? msg.channel.parentId
            : null;
            
        await campusService.updateCircle({ channel, thread });
        msg.channel.send("🤖 Se ha enviado un alerta en DEV.F Campus 🤖");
      } else {
        LoggerInstance.info("No se ha enviado el mensaje"); 
      }
    } else {
      LoggerInstance.info("No tienes permisos para enviar el mensaje");
    }
  } catch (error) {
    LoggerInstance.error(error);
  }
}

export default notifyCampusCircleBot;
