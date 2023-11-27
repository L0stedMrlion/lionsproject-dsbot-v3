import { Client } from 'discord.js'
import type { CommandKit } from 'commandkit'

export default function (c: Client<true>, client: Client<true>, handler: CommandKit) {
  client.on('message', (message) => {
    if (!message.guild) return
  })
}
