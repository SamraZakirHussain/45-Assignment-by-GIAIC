// Function to create an array of album Objects
function make_album(artist, title) {
    var Album = [{
            artistname: "Atif Aslam",
            artistalbum: "Doorie"
        },
        {
            artistname: "Kaife Khalil",
            artistalbum: "Kahani suno 2.0"
        },
        {
            artistname: "Sahir Ali Bagga",
            artistalbum: "Deewangi"
        }
    ];
    return Album;
}
// Call the function and print the albums
var albums = make_album("Atif Aslam", "Doorie");
console.log(albums[0]);
console.log(albums[1]);
console.log(albums[2]);
