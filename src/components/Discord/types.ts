export type DiscordProps = {
  id: string,
} & StyledDiscordProps;

export type StyledDiscordProps = {
  theme?: "light" | "dark",
  delay?: number,
  showJoinButton?: boolean,
  height?: number,
}