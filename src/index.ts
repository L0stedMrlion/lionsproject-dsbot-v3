import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import eventHandler = require('./handlers/eventHandler')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})
