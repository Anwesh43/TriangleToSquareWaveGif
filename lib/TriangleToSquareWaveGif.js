const W = 500, H = 500
const Canvas = require('canvas')
const GifEncoder = require('gifencoder')
const fs = require('fs')
class TriangleToSquareWaveGif {
    constructor() {
        this.initCanvas()
        this.initGifEncoder()
    }
    initCanvas() {
        this.canvas = new Canvas()
        this.canvas.width = W
        this.canvas.height = H
        this.context = this.canvas.getContext('2d')
    }

    initGifEncoder() {
        this.gifEncoder = new GifEncoder(W, H)
        this.gifEncoder.setQuality(100)
        this.gifEncoder.setRepeat(0)
        this.gifEncoder.setDelay(200)
    }

    drawColoredBackground(color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, W, H)
        this.gifEncoder.addFrame(this.context)
    }

    create(amp, freq, fileName) {
        this.gifEncoder.createReadStream().pipe(fs.createWriteStream(fileName))
        this.gifEncoder.start()
        this.drawColoredBackground('red')
        this.drawColoredBackground('green')
        this.drawColoredBackground('blue')
        this.drawColoredBackground('teal')
        this.drawColoredBackground('purple')
        this.gifEncoder.end()
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
