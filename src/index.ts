import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'
import { CommandKit } from 'commandkit'
import path from 'path-browserify'

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
  validationsPath: path.join(__dirname, 'validations'),
  devUserIds: ['710549603216261141'],
  skipBuiltInValidations: true,
  bulkRegister: true
})

client.login(process.env.TOKEN)
