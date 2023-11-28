import type { CommandData, SlashCommandProps } from 'commandkit'
import {
  ActionRowBuilder,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
} from 'discord.js'

export const data: CommandData = {
  name: 'survival',
  description: '🫶 Test modal command for our Survival?'
}

export function run({ interaction, client, handler }: SlashCommandProps) {
  const modal = new ModalBuilder().setCustomId('myModal').setTitle('My Modal')
  const favoriteColorInput = new TextInputBuilder()
    .setCustomId('favoriteColorInput')
    .setLabel("What's your favorite color?")
    .setStyle(TextInputStyle.Short)

  const hobbiesInput = new TextInputBuilder()
    .setCustomId('hobbiesInput')
    .setLabel("What's some of your favorite hobbies?")
    .setStyle(TextInputStyle.Paragraph)
  const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput)
  const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput)

  modal.addComponents(firstActionRow, secondActionRow)

  interaction.showModal(modal)
}
