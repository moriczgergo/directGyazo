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
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://api.gyazo.com/api/oembed?url=" + url, false ); // false for synchronous request
        xmlHttp.send( null );
        var response = xmlHttp.responseText;
        alert(JSON.parse(response)["url"]);
        chrome.tabs.update(tabId, {url: JSON.parse(response)["url"]}, function(tab){});
    }
}); 