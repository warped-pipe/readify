const toolUrl = "https://readify.me/";

chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var currentUrl = tabs[0].url;

        // Check if the current URL is a Readify article page
        if (currentUrl.startsWith(toolUrl)) {
            // Remove the 'https://readify.me/' part and keep the original path
            var originalUrl = currentUrl.replace(toolUrl, "");

            // If it's already a Readify article, navigate to the original article URL
            if (originalUrl.startsWith("http")) {
                chrome.tabs.update(tabs[0].id, { url: originalUrl });
            }
        } else {
            // Otherwise, navigate to the Readify page with the current URL as part of it
            chrome.tabs.update(tabs[0].id, { url: toolUrl + currentUrl });
        }
    });
});

// Create context menu for links
chrome.contextMenus.create({
    id: "openInReadify",
    title: "Open in Readify",
    contexts: ["link"]  // Only show when right-clicking a link
});

// Listen for context menu item click
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "openInReadify") {
        // Get the URL of the clicked link
        let linkUrl = info.linkUrl;

        // Construct the Readify URL (if the link is not already on Readify)
        if (!linkUrl.startsWith(toolUrl)) {
            linkUrl = toolUrl + linkUrl;
        }

        // Open the link in the current tab
        chrome.tabs.update(tab.id, { url: linkUrl });
    }
});

// When the browser action button is clicked, execute this function
chrome.browserAction.onClicked.addListener(function(tab) {
    // Query the active tab
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var currentUrl = tabs[0].url;

        // Check if the current URL is a Readify article page
        if (currentUrl.startsWith(toolUrl)) {
            // Remove the 'https://readify.me/' part and keep the original path
            var originalUrl = currentUrl.replace(toolUrl, "");

            // If it's already a Readify article, navigate to the original article URL
            if (originalUrl.startsWith("http")) {
                chrome.tabs.update(tabs[0].id, { url: originalUrl });
            }
        } else {
            // Otherwise, navigate to the Readify page with the current URL as part of it
            chrome.tabs.update(tabs[0].id, { url: toolUrl + currentUrl });
        }
    });
});