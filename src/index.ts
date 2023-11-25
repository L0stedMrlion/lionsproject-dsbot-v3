import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'
import { CommandKit } from 'commandkit'
import * as path from 'path'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  devUserIds: ['710549603216261141'],
  skipBuiltInValidations: true
})

try {
  client.login(process.env.TOKEN)
} catch (error) {
  console.error('Error occurred:', error)
  client.destroy()
}
