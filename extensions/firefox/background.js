const toolUrl = "https://readify.me/";

// When the browser action button is clicked, execute this function
browser.browserAction.onClicked.addListener(function(tab) {
    // Query the active tab
    browser.tabs.query({ currentWindow: true, active: true }).then(function(tabs) {
        var currentUrl = tabs[0].url;

        // Check if the current URL is a Readify article page
        if (currentUrl.startsWith(toolUrl)) {
            // Remove the 'https://readify.me/' part and keep the original path
            var originalUrl = currentUrl.replace(toolUrl, "");

            // If it's already a Readify article, navigate to the original article URL
            if (originalUrl.startsWith("http")) {
                browser.tabs.update(tabs[0].id, { url: originalUrl });
            }
        } else {
            // Otherwise, navigate to the Readify page with the current URL as part of it
            browser.tabs.update(tabs[0].id, { url: toolUrl + currentUrl });
        }
    });
});

// Create context menu for links
browser.contextMenus.create({
    id: "openInReadify",
    title: "Open in Readify",
    contexts: ["link"]  // Only show when right-clicking a link
});

// Listen for context menu item click
browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "openInReadify") {
        // Get the URL of the clicked link
        let linkUrl = info.linkUrl;

        // Construct the Readify URL (if the link is not already on Readify)
        if (!linkUrl.startsWith(toolUrl)) {
            linkUrl = toolUrl + linkUrl;
        }

        // Open the link in the current tab
        browser.tabs.update(tab.id, { url: linkUrl });
    }
});

// When the browser action button is clicked, execute this function
browser.browserAction.onClicked.addListener(function(tab) {
    // Query the active tab
    browser.tabs.query({ currentWindow: true, active: true }).then(function(tabs) {
        var currentUrl = tabs[0].url;

        // Check if the current URL is a Readify article page
        if (currentUrl.startsWith(toolUrl)) {
            // Remove the 'https://readify.me/' part and keep the original path
            var originalUrl = currentUrl.replace(toolUrl, "");

            // If it's already a Readify article, navigate to the original article URL
            if (originalUrl.startsWith("http")) {
                browser.tabs.update(tabs[0].id, { url: originalUrl });
            }
        } else {
            // Otherwise, navigate to the Readify page with the current URL as part of it
            browser.tabs.update(tabs[0].id, { url: toolUrl + currentUrl });
        }
    });
});
