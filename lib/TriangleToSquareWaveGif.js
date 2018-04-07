const W = 500, H = 500
class TriangleToSquareWaveGif {
    constructor() {

    }
    create(amp, freq, fileName) {

    }
}
const createTriangleToSquareWaveGif = (amp, freq, fileName) => {
    const triangleToSquareWaveGif = new TriangleToSquareWaveGif()
    if (amp < H) {
        triangleToSquareWaveGif.create(amp, freq, fileName)
    }
    else {
        console.log(`amplitude must be less than ${H}`)
    }
}
module.exports = createTriangleToSquareWaveGif
