import { Discord } from './src'

declare module "react-discord-widget" {
  export { Discord };
}

declare global {
  type DiscordType = {
    id: string,
    delay?: number,
  }
}