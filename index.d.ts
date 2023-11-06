declare module "react-discord-widget" {
  interface Channel {
    id: string,
    name: string,
    position: number,
  }

  interface Game {
    name: string,
  }

  interface Member {
    id: string,
    username: string,
    discriminator: string,
    avatar: string | null,
    status: string,
    avatar_url: string,
    game?: Game,
  }

  interface Server {
    id: string,
    name: string,
    instant_invite: string,
    channels: Channel[],
    members: Member[],
  }

  type DiscordType = {
    id: string,
    delay?: number,
  }

  export type DiscordProps = {
    id: string,
    theme?: "light" | "dark",
    delay?: number,
    showJoinButton?: boolean,
    height?: number,
  }

  export const useDiscord: (props: DiscordType) => {
    isLoading: boolean,
    error: any,
    data: Server | null,
    refetch: () => Promise<void>,
    remove: () => void,
    delay: number,
  }
  export const Discord = (props: DiscordProps) => JSX.Element;
}
