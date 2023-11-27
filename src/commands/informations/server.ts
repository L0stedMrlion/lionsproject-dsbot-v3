import type { CommandData, SlashCommandProps } from 'commandkit'
import { Client, EmbedBuilder } from 'discord.js'

export const data: CommandData = {
  name: 'server',
  description: '📊 Send you some info about our server'
}

export function run({ interaction, client, handler }: SlashCommandProps) {
  const stats = new EmbedBuilder()
    .setTitle("🦁 Lion's Project™")
    .setDescription(`You can find here some stats`)
    .setFooter({
      text: "🦁 Lion's Project™ © 2023",
      iconURL:
        'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3'
    })
  interaction.reply({ embeds: [stats] })
}
