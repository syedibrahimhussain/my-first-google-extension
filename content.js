
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('save').addEventListener('click',function(){
		var data = document.getElementById('textarea').value;
		chrome.storage.sync.set({"value":data});
		console.log("save clicked");
	});	
		document.getElementById('clear').addEventListener('click',function(){
		chrome.storage.sync.clear();	
		window.location.reload();
			console.log('cleard');
	});	

});

window.onload= function(){
	console.log("onload");
	chrome.storage.sync.get(null,function(data){
		console.log(data.value);
				document.getElementById('textarea').innerHTML=data.value;
		});
};

