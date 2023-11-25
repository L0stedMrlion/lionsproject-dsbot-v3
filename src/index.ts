import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import mongoose from 'mongoose'

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})
