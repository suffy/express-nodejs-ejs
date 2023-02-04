const http = require('http');
const fs = require('fs');
const port = 3000;

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        }else{
            res.write(data);
        }

        res.end();

    });
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html',
    });
    
    const url = req.url;
    console.log('1' + url);

    if (url === '/about') {
        console.log('2' + url);
        renderHtml('./about.html', res);
    }else if(url === '/contact'){
        renderHtml('./contact.html', res);
    }else{
        renderHtml('./index.html', res);
    }


}).listen(port, () => {
    console.log(`server is listening on port ${port}...`)
});

