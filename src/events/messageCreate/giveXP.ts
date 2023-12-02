import { Client, Message } from 'discord.js';
import Level = require('../../schema/level');
import type { CommandKit } from 'commandkit';
const cooldowns = new Set();

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
  };
}
