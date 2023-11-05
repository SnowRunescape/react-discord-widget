declare module "*.module.scss";

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
  status: "online" | "idle" | "dnd" | "streaming",
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
