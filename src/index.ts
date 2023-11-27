import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import { CommandKit } from 'commandkit'
import { mongoose } from 'mongoose'
import * as path from 'path'
import { author_id } from '../config.json'

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  devUserIds: [author_id] // Mrlion for dev cmds // set in command properties
})
;(async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to DB.')

    await client.login(process.env.TOKEN)
  } catch (error) {
    console.error('Error:', error)
  }
})()
