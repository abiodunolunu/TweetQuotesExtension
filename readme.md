# TweetQuotes Extension

This Chrome extension streamlines the process of viewing quoted tweets on Twitter/X. It adds a floating button directly on individual tweet pages. Clicking this button will instantly take you to the "quotes" section of that tweet, eliminating the need for multiple clicks or navigation. This makes it easier and faster to see all the quotes associated with a specific tweet.

The extension comprises two main parts:

**Service Worker**: Listens for tab URL changes and communicates the new URL to the content script.

**Content Script**: Injects a "view quotes" button on the tweet page if the URL matches a specific pattern.

## Installation

- Clone the repository or download the source code.
- Open Google Chrome and navigate to `chrome://extensions/`
- Enable Developer mode at the top-right corner.
- Click Load unpacked and select the directory (which is the `/public` folder) where the extension's files are located.
- The extension should now be installed.
- Reload Twitter
