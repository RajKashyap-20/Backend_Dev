const fs = require("fs")
const path = require("path")

const inputFilepath = path.join(__dirname, "input.txt")
const outputFilepath = path.join(__dirname, "output.txt")

const readStream = fs.createReadStream(inputFilepath)
const writeStream = fs.createWriteStream(outputFilepath)

readStream.pipe(writeStream)

writeStream.on("finish", () => {
    console.log("Writing stream has ended")
})

readStream.on("error", (err) => {
    console.log("Read error:", err.message)
})

writeStream.on("error", (err) => {
    console.log("Write error:", err.message)
})
