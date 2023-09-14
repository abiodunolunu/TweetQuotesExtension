const regex = new RegExp("^https://twitter.com/[^/]+/status/[^/]+$");
/**
 * @type {HTMLButtonElement | undefined}
 */
let quoteButton;

/**
 * @type {Partial<CSSStyleDeclaration>}
 */
const buttonStyles = {
  position: "fixed",
  bottom: "4rem",
  right: "4rem",
  backgroundColor: "#1DA1F2",
  color: "#FFFFFF",
  borderRadius: "8px",
  height: "3.5rem",
  padding: "0.5rem 1rem",
  // width: "3.5rem",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
};

/**
 * @param {string} url
 */
function createQuoteURL(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  url += "/quotes";

  return url;
}

/**
 * @param {HTMLElement} element
 * @param {Partial<CSSStyleDeclaration>} styles
 */
function applyStyles(element, styles) {
  for (const [key, value] of Object.entries(styles)) {
    element.style[key] = value;
  }
}

function injectButton() {
  const currentPageURL = document.location.href;
  const quotesURL = createQuoteURL(currentPageURL);

  const button = document.createElement("button");
  button.innerHTML = "<span>view quotes</span>";

  applyStyles(button, buttonStyles);

  button.addEventListener("click", function () {
    window.location = quotesURL;
  });

  quoteButton = button;
  document.body.append(button);
}

function removeButton() {
  if (quoteButton) {
    quoteButton.remove();
    quoteButton = undefined;
  }
}

// Initial Injection
if (regex.test(window.location)) {
  injectButton();
}

//Listen to change sent from service worker.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const isATweetPage = regex.test(request.url);

  isATweetPage ? injectButton() : removeButton();
});
