import { Client, ActivityType } from 'discord.js'
import type { CommandKit } from 'commandkit'
import { bot_version } from '../../../config.json'

export default function (c: Client<true>, client: Client<true>, handler: CommandKit) {
  console.log(`🦁 LionBot - ${bot_version}`)
  console.log('🦁 LionBot loading files...')
  console.log('🦁 LionBot is ready!')
  client.user.setActivity("🦁 Lion's Project™", {
    type: ActivityType.Watching
  })
}
