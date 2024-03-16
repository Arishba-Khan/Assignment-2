//Question 16
var guestlist = ["Zumar", "Aidam", "Haneen", "Selena"];
//Inform about bigger dinner table
console.log("Great news! I found a bigger dinner table.");
//Adding more guests
guestlist.unshift("Haram");
guestlist.splice(guestlist.length / 2, 0, "Taalia");
guestlist.push("Alam");
//Print new invitation
guestlist.forEach(function (guestlist) {
    console.log("Hey ".concat(guestlist, "! \n You are invited to a dinner at my home."));
});
//Question 17
//Apologize for cancel there invitation
console.log("Sorry guyz only two of you can come");
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("Sorry ".concat(removedguest, " we will meet again sometimes"));
}
guestlist.forEach(function (guestlist) {
    console.log("Dear ".concat(guestlist, ", you're stil invited to dinner."));
});
