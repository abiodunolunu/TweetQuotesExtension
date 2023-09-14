# TweetQuotes Extension

This Chrome extension aims to simplify the experience of viewing Twitter quotes. It adds a floating button on Twitter tweet pages that redirects the user to the corresponding "quotes" URL, where all quotes for a particular tweet can be found.

The extension comprises two main parts:

**Service Worker**: Listens for tab URL changes and communicates the new URL to the content script.

**Content Script**: Injects a "view quotes" button on the tweet page if the URL matches a specific pattern.

## Installation

- Clone the repository or download the source code.
- Open Google Chrome and navigate to chrome://extensions/.
- Enable Developer mode at the top-right corner.
- Click Load unpacked and select the directory (which is the `public` folder) where the extension's files are located.
- The extension should now be installed.
