import 'dotenv/config'
import { REST, Routes } from 'discord.js'
import { client_id } from '../../config.json'

const rest = new REST().setToken('process.env.TOKEN')

rest
  .put(Routes.applicationCommands('${client_id}'), { body: [] })
  .then(() => console.log('Successfully deleted all application commands.'))
  .catch(console.error)
