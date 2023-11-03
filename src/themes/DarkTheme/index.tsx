import useDiscord from "@Discord/hooks/useDiscord";

const DarkTheme = (props: DiscordType) => {
  const { id, delay } = props;

  const { data } = useDiscord({
    id,
    delay,
  });

  return (
    <div>
      <div>
        <img src="../../assets/discord.svg" alt="Discord" />

        <span><strong>80</strong> Members Online</span>
      </div>

      <div>
        members
      </div>

      <div>
        footer
      </div>
    </div>
  )
}

export default DarkTheme;