import { Discord, useDiscord } from './src'

declare module "react-discord-widget" {
  export {
    Discord,
    useDiscord
  };
}

declare global {
  type DiscordType = {
    id: string,
    delay?: number,
  }
}