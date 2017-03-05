chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    var url = tab.url;

    var isGyazoImage = true;

    if (!url.startsWith("https://gyazo.com/")){
        isGyazoImage = false;
    }

    var id = url.substring("https://gyazo.com/".length);

    if (id.length < 32){
        isGyazoImage = false;
    }

    if (isGyazoImage){
        chrome.tabs.update(tabId, {url: "https://i.gyazo.com/" + id + ".png"}, function(tab){});
    }
}); 