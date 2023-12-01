import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import { client_id } from '../config.json';

const rest = new REST().setToken('process.env.TOKEN');

rest
  .delete(Routes.applicationCommand(`${client_id}`, 'server'))
  .then(() => console.log('✅ Successfully deleted all application commands.'))
  .catch(console.error);
