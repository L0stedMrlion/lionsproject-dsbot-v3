import { Client, Message } from 'discord.js';
import Level = require('../../schema/level');
import type { CommandKit } from 'commandkit';
const cooldowns = new Set();

function getRandomXp(min: number, max: number): number {
    const min = Math.ceil(min);
    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
/**
 *
 * @param {Client} client
 * @param {Message} message
 */

export default function (
  c: Client<true>,
  client: Client<true>,
  message: Message,
  handler: CommandKit
) {
    if (!message.guild || message.author.bot || cooldowns.has(message.author.id)) {
        return;
      }

    const query = {
      userId: message.author.id

      try {
        const level: Level | null = await Level.findOne(query);
      
        if (level) {
          level.xp += xpToGive;
      
          if (level.xp > calculateLevelXp(level.level)) {
            level.xp = 0;
            level.level += 1;
      
            message.channel.send(`${message.member} you have leveled up to **level ${level.level}**.`);
          }
      
          await level.save().catch((e: Error) => {
            console.log(`Error saving updated level ${e}`);
            return;
          });
          cooldowns.add(message.author.id);
          setTimeout(() => {
            cooldowns.delete(message.author.id);
          }, 60000);
        } else {
          // Create new level
          const newLevel = new Level({
            userId: message.author.id,
            guildId: message.guild.id,
            xp: xpToGive,
          });
      
          await newLevel.save();
          cooldowns.add(message.author.id);
          setTimeout(() => {
            cooldowns.delete(message.author.id);
          }, 60000);
        }
      } catch (error: Error) {
        console.log(`Error giving xp: ${error}`);
      }
    };
  }
}
