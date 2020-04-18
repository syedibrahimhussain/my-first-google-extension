var contextMenu = {
	"id":"copy",
	"title":"copy to notepad",
	"contexts":["selection"]
};
chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener(function(clickdata){
	console.log(clickdata.selectionText);
	var id = clickdata.menuItemId;
	console.log(clickdata.menuItemId);
	let data = {
		"msg" : clickdata.selectionText,
	};
	//chrome.runtime.sendMessage(data.msg);
	//console.log("after msg send");
});
