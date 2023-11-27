import 'dotenv/config'
import { REST, Routes } from 'discord.js'
import { client_id, guild } from '../config.json'

const rest = new REST().setToken(`process.env.TOKEN`)

rest
  .put(Routes.applicationGuildCommands(`${client_id}`, `${guild}`), { body: [] })
  .then(() => console.log('Successfully deleted all guild commands.'))
  .catch(console.error)
