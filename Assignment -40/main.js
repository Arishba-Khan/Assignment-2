"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Album 1"));
console.log(make_album("Jokhay", "Album 2", 8));
console.log(make_album("Ali Zafar", "Album 3", 13));
