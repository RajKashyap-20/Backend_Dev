const fs = require("fs")
const path = require("path")
const { Transform } = require("stream")

const inputFilepath = path.join(__dirname, "input.txt")
const outputFilepath = path.join(__dirname, "output.txt")

const transformOutputFilepath = path.join(__dirname, "transform.txt")

const readStream = fs.createReadStream(inputFilepath)
const writeStream = fs.createWriteStream(transformOutputFilepath)
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().toUpperCase()
        this.push(transformedData)
        callback()
    }
})

readStream.pipe(upperCaseTransform).pipe(writeStream)
