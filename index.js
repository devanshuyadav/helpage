function Capitalize(name) {
    var words = name.split(' ')
    var capitalWords = []
    words.forEach(e => {
        const first = e[0].toUpperCase();
        const last = e.slice(1).toLowerCase();
        capitalWords.push(first + last);
    });
    return capitalWords.join(' ');
}

function setPreferences() {
    let setName, setTheme;
    if (localStorage.getItem("HELPAGE_PREF")) {
        // user data exists locally 

        let preference = JSON.parse(localStorage.getItem("HELPAGE_PREF"));
        setName = preference.name;
        setTheme = preference.theme;
    }
    else {
        // no user data preset

        let username_input = prompt("Plese enter your name:");
        let theme_input = prompt("Enter Your Preferred Theme (light/dark):");

        user.name = Capitalize(username_input);
        user.theme = theme_input.toLowerCase();

        setName = user.name;
        setTheme = user.theme;

        localStorage.setItem("HELPAGE_PREF", JSON.stringify(user));
    }
    $('#user_name').text(setName);
    $('.light-dark').addClass(setTheme);
    $('.light-dark-neo').addClass(setTheme + '-neo');
}
let user = {
    name: "",
    theme: ""
}

$(function () {
    console.log("ready!");
    setPreferences();
});

$('#settings').click(function () {
    if (localStorage.getItem("HELPAGE_PREF")) {
        localStorage.removeItem('HELPAGE_PREF');
    }
    location.reload();
    setPreferences();
});

// dark mode toggle
$("#dark-mode-toggle-button").on("click", function () {
    if ($("body").hasClass("dark")) {
        // convert to light

        // for Toggle Button
        $("#dark-mode-toggle-button").text("🌝");
        // for body, salutation, dropdown & navbar
        $(".light-dark").removeClass("dark");
        $(".light-dark").addClass("light");
        // for icons
        $(".icons").removeClass("dark-neo");
        $(".icons").addClass("light-neo");
        // for search bar and button
        $(".searchBar, .searchButton").removeClass("dark-neo");
        $(".searchBar, .searchButton").addClass("light-neo");
    }
    else {
        // convert to dark

        // for Toggle Button
        $("#dark-mode-toggle-button").text("🌞");
        // for for body, salutation, dropdown & navbar
        $(".light-dark").removeClass("light");
        $(".light-dark").addClass("dark");
        // for icons
        $(".icons").removeClass("light-neo");
        $(".icons").addClass("dark-neo");
        // for search bar and button
        $(".searchBar, .searchButton").removeClass("light-neo");
        $(".searchBar, .searchButton").addClass("dark-neo");
    }
});