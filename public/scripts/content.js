const regex = new RegExp("^https://twitter.com/[^/]+/status/[^/]+$");

const quoteSvgIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-quote" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
<path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
</svg>`;

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
 * @type {HTMLButtonElement | undefined}
 */
let buttonTag;

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

function injectButton() {
  const currentPage = document.body;
  const currentPageURL = document.location.href;
  const quotesURL = createQuoteURL(currentPageURL);

  const button = document.createElement("button");

  button.innerHTML = "<span>view quotes</span>";

  for (const [key, value] of Object.entries(buttonStyles)) {
    button.style[key] = value;
  }

  button.addEventListener("click", function () {
    window.location = quotesURL;
  });

  buttonTag = button;

  currentPage.append(button);
}

function removeButton() {
  if (buttonTag) {
    buttonTag.remove();
    buttonTag = undefined;
  }
}

if (regex.test(window.location)) {
  injectButton();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const isATweetPage = regex.test(request.url);

  isATweetPage ? injectButton() : removeButton();
});
