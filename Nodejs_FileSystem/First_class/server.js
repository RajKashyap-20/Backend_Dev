const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {

    const method = req.method;
 

    const  parsedUrl = new URL(req.url,"http://localhost:8000/" )
    // const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)
    // const name= parsedUrl.quary.name;
    const name = parsedUrl.searchParams.get("name");
    const path = parsedUrl.pathname;

    // create log text
    const log = `${new Date().toISOString()} | ${method} | ${path}\n`;

    // write log to file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log");
        }
    });

    switch (path) {
        case "/user":
            res.end(`welcome ${name}`);
            break;

        case "/about-us":
            res.end("welcome to about us");
            res.writemead(200,{"Content-Type":"text/html"});
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1> welcome to toor site</h1>");
    }
});


server.listen(8000, () => {
    console.log("Server is running on port 8000");
});