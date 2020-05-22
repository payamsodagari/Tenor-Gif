function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
    return;
}

//------------------------------loop-------------
function tenorCallback_search(responsetext) {
    var response_objects = JSON.parse(responsetext);
    top_10_gifs = response_objects["results"];
    for (var i = 0; i <= 40; i++) {
        var src = top_10_gifs[i]["media"][0]["gif"]["url"];
        var img = document.createElement('img');
        img.src = src;
        document.getElementById('image').prepend(img);
        // setInterval(function(){
            $("#image img:nth-last-child(-n+25)").fadeOut(500, function() {
                $(this).remove();
            });
        // });
    }
       return;
}

//-----------------------------search---------------------------------
function grab_data() {
    var apikey = "PXJZBDAIYKLS";
    var lmt = 50;
    var search_term = document.getElementById('search').value;
    $("#inSearch").text(innerHTML = search_term.toUpperCase());
    var search_url = "https://api.tenor.com/v1/search?q=" + search_term + "&key=" + apikey + "&limit=" + lmt;
    httpGetAsync(search_url, tenorCallback_search);
    return;
}
grab_data();