import { Client, Message } from 'discord.js';
import Level = require('../../schema/level');
import type { CommandKit } from 'commandkit';

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
  if (!message.guild || message.author.bot) {
    return;

    const query = {
      userId: message.author.id
    };
  }
}
