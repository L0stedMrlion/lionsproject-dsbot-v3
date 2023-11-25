import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'
import { CommandKit } from 'commandkit'
import path from 'path'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

new CommandKit({
  client,
  eventsPath: path.join(__dirname, 'events'),
  devUserIds: ['710549603216261141'],
  skipBuiltInValidations: true,
  bulkRegister: true
})

client.login(process.env.TOKEN)
