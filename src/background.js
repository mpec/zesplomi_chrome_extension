chrome.browserAction.onClicked.addListener(function() {
	 chrome.tabs.query({
		 currentWindow: true,
		 active: true
	 }, function(tab) {
		chrome.tabs.sendMessage(tab[0].id, {message: "copy_image"});
		
		chrome.browserAction.setIcon({
            path: "icon-saved.png",
            tabId: tab[0].id
        });
		
		setTimeout(function(){
			chrome.browserAction.setIcon({
				path: "icon.png",
				tabId: tab[0].id
			});
		}, 2000)
		
	 });
});