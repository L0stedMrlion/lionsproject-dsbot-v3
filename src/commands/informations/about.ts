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
      `Hello, I'm LionBot 🦁!
       I'm activly developed by Mrlion and I'm made in discord.js v14.
      
       You can find my code written in **Typescript** on Mrlion's [Github](https://github.com/L0stedMrlion/lionsproject-dsbot-v3)!
       
       You can send feedback about me to <@710549603216261141>!`
    )
    .setColor('#CDAC01')
    .setFooter({
      text: "🦁 Lion's Project™ © 2023",
      iconURL:
        'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3'
    })

  interaction.reply({ embeds: [about] })
}
