function Capitalize(name) {
  var words = name.split(" ");
  var capitalWords = [];
  words.forEach((e) => {
    const first = e[0].toUpperCase();
    const last = e.slice(1).toLowerCase();
    capitalWords.push(first + last);
  });
  return capitalWords.join(" ");
}

const dark = "🌝";
const light = "🌞";

let user = {
  name: "",
  theme: "",
  cc: "",
  new_tab: "",
};

function setName() {
  let newName; // username
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS") && preference.name != "") {
    // user data exists locally
    newName = preference.name;
    user.name = newName;
  } else {
    // no user data preset
    let username_input = prompt("Please enter your name:");

    // checks if user has entered if user has added
    if (!username_input) {
      return;
    }

    newName = Capitalize(username_input); // for updating now
    user.name = Capitalize(username_input); // for Storing in LocalStorage
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  // action
  console.log("setName: " + JSON.stringify(user));
  $("#user_name").text(newName);
}

$("#name_change").click(function () {
  if (localStorage.getItem("HELPAGE_SETTINGS")) {
    // already exists
    let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
    preference.name = "";
    user.name = "";
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  setName();
});

// SET Theme
function setTheme() {
  let newTheme; // light or dark
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS") && preference.theme != "") {
    // user data exists locally 
    newTheme = preference.theme;
    user.theme = preference.theme;
  }
  else {
    // no user data preset
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      newTheme = "dark";
    }
    else {
      newTheme = "light";
    }
    user.theme = newTheme; // for Local Storage
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  // action
  $('.light_dark').addClass(newTheme);
  $('.light_dark_neo').addClass(newTheme + "_neo");
}

// Click Theme
$("#dark-mode-toggle-button").on("click", function () {
  if ($("body").hasClass("dark")) {
    // convert to light

    user.theme = "light";
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
    // for Toggle Button
    $("#dark-mode-toggle-button").text("🌝");
    // for body, salutation, dropdown & navbar
    $(".light_dark").removeClass("dark");
    $(".light_dark").addClass("light");
    // for icons
    $(".icons").removeClass("dark_neo");
    $(".icons").addClass("light_neo");
    // for search bar and button
    $(".searchBar, .searchButton").removeClass("dark_neo");
    $(".searchBar, .searchButton").addClass("light_neo");
  } else {
    // convert to dark

    user.theme = "dark";
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
    // for Toggle Button
    $("#dark-mode-toggle-button").text("🌞");
    // for for body, salutation, dropdown & navbar
    $(".light_dark").removeClass("light");
    $(".light_dark").addClass("dark");
    // for icons
    $(".icons").removeClass("light_neo");
    $(".icons").addClass("dark_neo");
    // for search bar and button
    $(".searchBar, .searchButton").removeClass("light_neo");
    $(".searchBar, .searchButton").addClass("dark_neo");
  }
});

function setCC() {
  let openInNewTab; // ON or OFF
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS") && preference.cc != "") {
    // user data exists locally
    openInNewTab = preference.cc;
    user.cc = preference.cc;
  } else {
    // no user data preset
    if ($("#closedCaptions").is(":not(:checked)")) {
      openInNewTab = "OFF";
    } else {
      openInNewTab = "ON";
    }
    user.cc = openInNewTab; // for Storing in LocalStorage
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  // action
  if (openInNewTab === "ON") {
    $("#closedCaptions").prop("checked", true); // toggle Checkbox if set already
    $(".hover_txt").show();
  } else if (openInNewTab === "OFF") {
    $("#closedCaptions").prop("checked", false); // toggle Checkbox if set already
    $(".hover_txt").hide();
  } else {
    console.log("CC Not recorded");
  }
}

// click CC
$("#closedCaptions").click(function () {
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS")) {
    // already exists
    preference.cc = "";
    user.cc = "";
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  setCC();
});

function setNewTab() {
  let openInNewTab; // ON or OFF
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS") && preference.new_tab != "") {
    // user data exists locally
    openInNewTab = preference.new_tab;
    user.new_tab = preference.new_tab;
  } else {
    // no user data preset
    if ($("#newTab").is(":not(:checked)")) {
      openInNewTab = "OFF";
    } else {
      openInNewTab = "ON";
    }
    user.new_tab = openInNewTab; // for Storing in LocalStorage
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  // action
  if (openInNewTab === "ON") {
    $("#newTab").prop("checked", true); // toggle Checkbox if set already
    $(".icons").children("a").attr("target", "_blank");
  } else if (openInNewTab === "OFF") {
    $("#newTab").prop("checked", false); // toggle Checkbox if set already
    $(".icons").children("a").removeAttr("target");
  } else {
    console.log("New Tab Not recorded");
  }
}

// click New Tab
$("#newTab").click(function () {
  let preference = JSON.parse(localStorage.getItem("HELPAGE_SETTINGS"));
  if (localStorage.getItem("HELPAGE_SETTINGS")) {
    // already exists
    preference.new_tab = "";
    user.new_tab = "";
    localStorage.setItem("HELPAGE_SETTINGS", JSON.stringify(user));
  }
  setNewTab();
});

// Sub-Main
function initializeHelpage() {
  setName();
  setTheme();
  setCC();
  setNewTab();
}

// MAIN
$(function () {
  console.log("ready!");
  initializeHelpage();
});
