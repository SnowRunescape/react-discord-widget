import DarkTheme from '@Discord/themes/DarkTheme';
import LightTheme from '@Discord/themes/LightTheme';

function Discord(props: DiscordType) {
  const {
    theme = "dark"
  } = props;

  const Themes = {
    dark: <DarkTheme {...props} />,
    light: <LightTheme {...props} />,
  }

  return Themes[theme];
}

export default Discord;
