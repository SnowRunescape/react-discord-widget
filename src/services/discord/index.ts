const fetchDiscordWidget = (id: string) => {
  return fetch(`https://discord.com/api/guilds/${id}/widget.json`);
}

export {
  fetchDiscordWidget,
}