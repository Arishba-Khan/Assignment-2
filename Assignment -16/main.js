var guestlist = ["Zumar", "Aidam", "Haneen", "Selena"];
guestlist.unshift("Haram");
guestlist.splice(guestlist.length / 2, 0, "Taalia");
guestlist.push("Alam");
guestlist.forEach(function (guestlist) {
    console.log("Hey ".concat(guestlist, "! \n You are invited to a dinner at my home."));
});
