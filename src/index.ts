import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'
import { CommandKit } from 'commandkit'
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
    '1092013060983640084',
    '1176940127499595817',
    '1167143976302805093',
    '1092013063089172532'
  ]
})
;(async () => {
  try {
    await client.login(process.env.TOKEN)
  } catch (error) {
    console.error('❗ Error', error)
  }
})()
