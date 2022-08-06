// Funções construtoras

function criarAlbum (bandName, albumName, genreName, year) {
    this.bandName = bandName
    this.albumName = albumName
    this.genreName = genreName
    this.yearRelease = parseInt(year) 
}

let SOAD = new criarAlbum('System of a Down', 'Toxicity', 'Metal Alternativo', 2001)

console.table(SOAD)


