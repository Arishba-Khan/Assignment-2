"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ["Mecca", "Medina", "Capadocia", "Adalar", "Malacca", "Lahore"];
//Original order
console.log("Original order:", places);
//Alphabetical order without modefying 
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//Original order
console.log("Original order:", places);
//Reverse alphabetical order without modefying
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
//Original order 
console.log("Original order:", places);
//Reverse order
console.log("Reverse order:", places);
//Reverse order
console.log("Reverse order:", places);
//Alphabetical order
console.log("Alphabetical order:", places);
//Reverse order
console.log("Reverse order:", places);
