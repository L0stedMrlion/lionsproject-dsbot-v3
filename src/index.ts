import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import { CommandKit } from 'commandkit'
import * as path from 'path'
import { version } from '../package.json'

const token = process.env.TOKEN

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
  devUserIds: [version],
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
    await client.login(token)
  } catch (error) {
    console.error('❗ Error just occured', error)
  }
})()
