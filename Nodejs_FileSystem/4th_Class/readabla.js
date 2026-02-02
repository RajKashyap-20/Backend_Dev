// Streams
const fs = require("fs")
const path = require("path")

const inputFilepath = path.join(__dirname, "input.txt")

const readStream = fs.createReadStream(inputFilepath, { encoding: "utf-8" })

readStream.on("data", (chunk) => {
    console.log("Data is received in chunk:", chunk)
})

readStream.on("end", () => {
    console.log("Read stream ended")
})

readStream.on("error", (err) => {
    console.log("Error occurred:", err.message)
})
