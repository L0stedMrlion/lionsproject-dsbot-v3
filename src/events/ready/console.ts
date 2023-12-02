import { Client, ActivityType } from 'discord.js';
import type { CommandKit } from 'commandkit';

export default function (c: Client<true>, client: Client<true>, handler: CommandKit) {
  console.log('🦁 LionBot loading all files...');
  console.log('🦁 LionBot is ready!');
  client.user.setActivity("🦁 Lion's Project™", {
    type: ActivityType.Watching
  });
}
