chrome.browserAction.onClicked.addListener(function () {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function (tab) {
		chrome.tabs.sendMessage(tab[0].id, { message: "copy_image" });
	});
});

chrome.runtime.onMessage.addListener(
	function(request) {
	  	  if (request.message == "success")
			chrome.browserAction.setIcon({
				path: "icon-saved.png"
			});
	
			setTimeout(function () {
				chrome.browserAction.setIcon({
					path: "icon.png"
				});
			}, 2000)
	});