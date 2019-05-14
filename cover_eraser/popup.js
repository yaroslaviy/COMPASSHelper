function injectScript(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.executeScript(tabs[0].id, {file: "execute.js"});
	});
}

var eraseB = document.getElementById('erasePage');
eraseB.addEventListener('click', injectScript);


