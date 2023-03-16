async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

console.log(await getCurrentTab())

chrome.webRequest.onSendHeaders.addListener(
    (details) => {
        console.log(details.requestHeaders)
    },
    {"urls": ["https://discord.com/api/*"]},
    ["requestHeaders", "extraHeaders"]
)