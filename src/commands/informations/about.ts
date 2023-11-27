import type { CommandData, SlashCommandProps } from 'commandkit'
import { EmbedBuilder } from 'discord.js'

export const data: CommandData = {
  name: 'about',
  description: '🦁 Give you some information about LionBot'
}

export function run({ client, interaction }: SlashCommandProps) {
  const about = new EmbedBuilder()
    .setTitle('🦁 LionBot')
    .setDescription(
      `Hello, I'm LionBot. I'm activly developed by Mrlion and I'm made in discord.js v14.
      
      `
    )
    .setColor('#ffffff')

  interaction.reply({ embeds: [about] })
}
