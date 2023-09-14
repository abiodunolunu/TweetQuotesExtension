// Listener for tab updates

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL has changed
  if (changeInfo.url) {
    // Send a message to the content script of the updated tab with the new URL
    chrome.tabs.sendMessage(tabId, {
      url: changeInfo.url,
    });
  }
});
