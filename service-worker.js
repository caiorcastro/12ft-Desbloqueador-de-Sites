chrome.action.onClicked.addListener(async (tab) => {
  const newUrl = `https://12ft.io/${tab.url}`;
  await chrome.tabs.update(tab.id, { url: newUrl });
});