const http = require('http');
const url = require('url');
const fs = require('fs');
const fsAsync = require('fs').promises;

const mainFile = fs.readFileSync("./index.txt", 'utf8');


const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathUrl = req.url;

    if(pathUrl === "/test"){
        res.end("Test Page");
    }
    else if(pathUrl === "/"){
        res.end("Hello fsw2");
    }
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server is running at http://localhost:3000/');
});


async function rewrite(filepath, content) {
    try {
        await fsAsync.writeFile(filepath, content) 
        console.log(`Success`)
        return
    } catch (error) {
        console.log(error)
    }
}