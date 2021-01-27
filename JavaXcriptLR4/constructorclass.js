class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.title);

const nsong = new Song("TV", "The Year");
console.log(nsong.title);
