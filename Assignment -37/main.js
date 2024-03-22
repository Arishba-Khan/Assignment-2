"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Code needs a coffee"; }
    console.log("Making a ".concat(size, " t-shirt with the message ").concat(message, " printing on it"));
};
make_shirt();
make_shirt("Medium");
make_shirt("Large", "Code Mode On");
