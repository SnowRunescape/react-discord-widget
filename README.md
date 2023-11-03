# React Discord Widget

[![Version](https://img.shields.io/badge/version-1.0.7-brightgreen.svg)](https://github.com/SnowRunescape/react-discord-widget)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SnowRunescape/react-discord-widget/blob/main/LICENSE)

## Overview

`react-discord-widget` is a React component for integrating a Discord widget into your web application. It allows you to display information about your Discord server, such as the number of online members and an invite link, in a customizable and user-friendly way.

## Installation

To use `react-discord-widget` in your React project, you can install it via npm:

```bash
npm install react-discord-widget
```

## Usage

Here's how you can use the `react-discord-widget` component in your React application:

```javascript
import React from 'react';
import Discord from 'react-discord-widget';

function App() {
  return (
    <div>
      <h1>My Awesome Discord Server</h1>
      <Discord serverId="YOUR_SERVER_ID" />
    </div>
  );
}

export default App;
```

Make sure to replace `"YOUR_SERVER_ID"` with the actual ID of your Discord server.

## Configuration

You can customize the appearance and behavior of the widget by passing additional props to the `DiscordWidget` component. For example:

```javascript
<DiscordWidget
  serverId="YOUR_SERVER_ID"
  width={300}
  height={400}
  theme="dark"
  showMembers={true}
  showOnline={true}
  showJoinButton={true}
/>
```

## License

This project is licensed under the [MIT License](https://github.com/SnowRunescape/react-discord-widget/blob/main/LICENSE). Feel free to use and modify it as you see fit.

## Repository

Please report any issues or suggestions on the repository's issue tracker.

Feel free to use and enjoy the `react-discord-widget` component in your web applications! If you have any questions or need assistance, don't hesitate to reach out or open an issue on the GitHub repository.