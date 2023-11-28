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

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const modal = new ModalBuilder().setCustomId('myModal').setTitle('My Modal')

  const username = new TextInputBuilder()
    .setCustomId('username')
    .setLabel("What's your favorite color?")
    .setStyle(TextInputStyle.Short)

  const informations = new TextInputBuilder()
    .setCustomId('informations')
    .setLabel("What's some of your favorite hobbies?")
    .setStyle(TextInputStyle.Paragraph)

  const firstActionRow = new ActionRowBuilder().addComponents(username)
  const secondActionRow = new ActionRowBuilder().addComponents(informations)

  await interaction.showModal(modal)

  const submittedModal = await interaction.awaitModalSubmit({
    modalId: 'myModal',
    filter: (interaction) => interaction.user.id === interaction.user.id,
    timeout: 60000
  })

  if (submittedModal) {
    const usernameInput = submittedModal.components[0].components[0].value
    const informationsInput = submittedModal.components[1].components[0].value

    interaction.reply(
      `Your favorite color is ${usernameInput} and your hobbies are ${informationsInput}`
    )
  } else {
    interaction.reply('You did not submit the modal')
  }
}
