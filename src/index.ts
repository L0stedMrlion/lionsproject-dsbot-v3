import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import { CommandKit } from 'commandkit'
const mongoose = require('mongoose')
import * as path from 'path'
import { mrlion_id } from '../config.json'

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
  devUserIds: [mrlion_id],
  devRoleIds: [
    '1092013060983640084', // * Project Founder
    '1176940127499595817', // * Project Team Leader
    '1167143976302805093', // * Project Team Member
    '1092013063089172532', // * Project Support
    '1092013052288835654' // * Administrator (*)
  ]
})
;(async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB, { keepAlive: true })
    console.log('Connected to DB.')

    await client.login(process.env.TOKEN)
  } catch (error) {
    await console.error('❗ Error just occured', error)
  }
})()
