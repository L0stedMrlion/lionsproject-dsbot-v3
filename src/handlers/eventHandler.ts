import path from 'path'
import getAllFiles from '../utils/getAllFiles'

type EventHandler = (client: Client, arg: any) => Promise<void>

export default function loadEvents(client: Client): void {
  const eventFolders: string[] = getAllFiles(path.join(__dirname, '..', 'events'), true)

  for (const eventFolder of eventFolders) {
    const eventFiles: string[] = getAllFiles(eventFolder)
    eventFiles.sort((a: string, b: string): number => a > b)

    const eventName: string = eventFolder.replace(/\\/g, '/').split('/').pop()!

    client.on(eventName, async (arg: any): Promise<void> => {
      for (const eventFile of eventFiles) {
        const eventFunction: EventHandler = require(eventFile)
        await eventFunction(client, arg)
      }
    })
  }
}
