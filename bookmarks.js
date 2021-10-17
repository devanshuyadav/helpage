document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    if (!validateEntries(siteName, siteURL)) {
        return false;
    }

    var bookmark = {
        name: siteName,
        URL: siteURL
    }

    if (localStorage.getItem("HELPAGE_BOOKMARKS") === null) {
        var bookmarks = []
        bookmarks.push(bookmark);
    } else {
        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem("HELPAGE_BOOKMARKS"));
        bookmarks.push(bookmark);
    }
    localStorage.setItem("HELPAGE_BOOKMARKS", JSON.stringify(bookmarks));

    // clear after submit
    document.getElementById('myForm').reset();

    // update instantly after submitting
    fetchBookmarks();

    e.preventDefault();
}
function deleteBookmark(url) {
    // get
    var bookmarks = JSON.parse(localStorage.getItem("HELPAGE_BOOKMARKS"));
    // change
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].URL = url) {
            // remove
            bookmarks.splice(i, 1);
        }
    }
    // reset
    localStorage.setItem("HELPAGE_BOOKMARKS", JSON.stringify(bookmarks));
    // reload
    fetchBookmarks();


}

function fetchBookmarks() {
    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("HELPAGE_BOOKMARKS"));
    var bookmarksOutput = document.getElementById('bookmarksOutput');
    bookmarksOutput.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var URL = bookmarks[i].URL;

        // bookmarksOutput.innerHTML += '<div>' +
        //     '<a class="btn btn-primary" target="_blank" href = "' + URL + '"<h5>' + name + '</h5></a>' +
        //     '<a onclick="deleteBookmark(\'' + URL + '\')" class="btn btn-danger" href="#"> X </a>' +
        //     '</div>';
        bookmarksOutput.innerHTML += "<a href=" + URL + " class=\"dropdown-item\">" + name + "</a>" +
            '<a onclick="deleteBookmark(\'' + URL + '\')" class="btn btn-danger" href="#"> X </a>';
    }

}

function validateEntries(siteName, siteURL) {
    if (!siteName || !siteURL) {
        alert("Empty Response Detected! Please fill again.");
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (!siteURL.match(regex)) {
        alert("INVALID URL");
        return false;
    }
    return true;
}