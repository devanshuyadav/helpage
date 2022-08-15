document.getElementById("myForm").addEventListener("submit", saveBookmark);
var bookmarksParentDiv = document.getElementById("bookmarks_parent");
var formDiv = document.getElementById("myForm");
var bookmarksOutput = document.getElementById("bookmarksOutput");
var bookmarksToggler = document.getElementById("bookmarks_toggler");

function saveBookmark(e) {
  var siteName = document.getElementById("siteName").value;
  var siteURL = document.getElementById("siteURL").value;

  if (!validateEntries(siteName, siteURL)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    URL: siteURL,
  };

  if (localStorage.getItem("HELPAGE_BOOKMARKS") === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);
  } else {
    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("HELPAGE_BOOKMARKS"));
    bookmarks.push(bookmark);
  }
  localStorage.setItem("HELPAGE_BOOKMARKS", JSON.stringify(bookmarks));

  // clear after submit
  formDiv.reset();

  // update instantly after submitting
  fetchBookmarks();

  // Close div afterwards
  bookmarksParentDiv.style.display = "none";

  e.preventDefault();
}
function deleteBookmark(url) {
  // get
  var bookmarks = JSON.parse(localStorage.getItem("HELPAGE_BOOKMARKS"));

  // change
  for (var i = 0; i < bookmarks.length; i++) {
    if ((bookmarks[i].URL = url)) {
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

  bookmarksOutput.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var URL = bookmarks[i].URL;

    bookmarksOutput.innerHTML +=
      "<span>" +
      '<img style="width:26px;" src="https://s2.googleusercontent.com/s2/favicons?domain_url=' +
      URL +
      '&sz=64">' +
      '<a href="' +
      URL +
      '" class="dropdown-item" target="_blank" >' +
      name +
      "</a>" +
      "<a onclick=\"deleteBookmark('" +
      URL +
      '\')" class="btn deleteBtn" href="#">&times;</a>' +
      "</span>";
  }
}

function validateEntries(siteName, siteURL) {
  if (!siteName || !siteURL) {
    alert("Empty Response Detected! Please fill again.");
    return false;
  }

  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (!siteURL.match(regex)) {
    alert("INVALID URL");
    return false;
  }
  return true;
}

bookmarksToggler.addEventListener("click", function () {
  console.log(bookmarksParentDiv.style.display);
  if (bookmarksParentDiv.style.display !== "none") {
    bookmarksParentDiv.style.display = "none";
  } else {
    bookmarksParentDiv.style.display = "block";
  }
});
