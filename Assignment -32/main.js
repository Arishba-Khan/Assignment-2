var current_user = ["User-1", "User-2", "User-3", "User-4"];
var new_user = ["user-1", "user-5", "user-6", "user-7"];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) {
        current_user.toLowerCase() === new_user.toLowerCase();
    })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
