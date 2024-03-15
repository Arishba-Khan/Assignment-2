"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 14
var guest = ["Rukhsar", "Hashir", "Harmain"];
guest.forEach(function (guest) {
    console.log("Assalam-o-Alikum ".concat(guest, ",\n You are invited to a dinner at my home."));
});
//Question 15
console.log("\n".concat(guest[2], " won't be able to attend dinner tonight. \n"));
//Replace guest 
var new_guest = "Zubair";
guest.pop();
guest.push(new_guest);
//New invitations
guest.forEach(function (guest) {
    console.log("Assalam-o-Alikum ".concat(guest, ",\n You are invited to a dinner at my home."));
});
