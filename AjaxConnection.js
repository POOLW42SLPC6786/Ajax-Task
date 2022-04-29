var data_source = "http://fakeapi.jsonparseronline.com/posts";
var http_request = new XMLHttpRequest();
try {
    // Opera 8.0+, Firefox, Safari 
    http_request = new XMLHttpRequest();
} catch (e) {

    // Internet Explorer Browsers
    try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {

        try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {

            // Something went wrong
            alert("Your browser broke!");
        }
    }
}
http_request.onreadystatechange = function () {
    if (http_request.readyState == 4 && http_request.status == 200) {
        var Container = ``;
        var jsonObj = JSON.parse(http_request.responseText);

        for (var index = 0; index < jsonObj.length; index++) {
            if (jsonObj[index].likes >= 10) {
                var Content = jsonObj[index].content;
                var Title = jsonObj[index].title;
                var ImageLink = jsonObj[index].imageUrl;
                var Excerpt = Content.slice(0, 100);
                var Likes = jsonObj[index].likes;
                var Hits = jsonObj[index].hits;

                Container += `<div id="single-post">
                <h2 id="title">${Title}</h2>
                <img src="${ImageLink}" alt="error" id="image">
                <p id="excerpt">${Excerpt}</p>
                <button type="button" id="likes">${Likes}</button>
                <button type="button" id="hits">${Hits}</button>
                <button type="button" id="view">View</button>
                </div>`;
            }
            document.getElementById("post-section").innerHTML = Container;
        }
    }
}

http_request.open("GET", data_source, true);
http_request.send();


