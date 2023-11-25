import { CommandData, SlashCommandProps } from 'commandkit'

const icanhazdadjokeAPI = 'https://icanhazdadjoke.com/'

export const data: CommandData = {
  name: 'joke',
  description: '🐸 Replies with some funny joke!'
}

export async function execute({ interaction }: SlashCommandProps) {
  try {
    const response = await fetch(icanhazdadjokeAPI)
    const jokeData = await response.json()

    const joke = jokeData.joke

    await interaction.reply({
      content: joke,
      ephemeral: false
    })
  } catch (error) {
    console.error('Failed to fetch joke:', error)
    await interaction.reply({
      content: 'Oops, something went wrong while fetching a joke.',
      ephemeral: false
    })
  }
}
