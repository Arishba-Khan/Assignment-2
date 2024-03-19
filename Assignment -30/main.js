var usernames = ["Admin", "Arishba", "Zumar"];
usernames.forEach(function (usernames) {
    if (usernames == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames, ", thank you for loggin in again."));
    }
});
