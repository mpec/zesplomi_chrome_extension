chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

	if( request.message === "copy_image" ) {
		const img = document.querySelector("#contentimg .img-responsive");
		
		if(img){
			var canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			canvas.getContext("2d").drawImage(img, 0, 0);
						
			canvas.toBlob(function(blob) {
			  navigator.clipboard.write([
						new ClipboardItem({
							[blob.type]: blob
						})
					])
			});
		}
	}
  }
);
