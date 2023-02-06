const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
//   res.send('Hello World!')
    // res.json({ 
    //     user: 'suffy', 
    //     email: 'suffy@gmail.com' 
    // })

    // res.sendFile('./index.html', { root: __dirname });

    const mahasiswa = [
        {
            nama : 'suffy',
            email : 'suffy@gmail.com'
        },
        {
            nama : 'yanuar',
            email : 'yanuar@gmail.com'
        },
        {
            nama : 'iskandar',
            email : 'iskandar@gmail.com'
        }
    ];

    res.render('index', {
        layout : 'layouts/main-layout',
        nama : 'suffy yanuar',
        title : 'halaman home',
        mahasiswa
    });

});

app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout',
        title: 'halaman about' 
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'halaman contact' 
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         }else{
//             res.write(data);
//         }

//         res.end();

//     });
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html',
//     });
    
//     const url = req.url;
//     console.log('1' + url);

//     if (url === '/about') {
//         console.log('2' + url);
//         renderHtml('./about.html', res);
//     }else if(url === '/contact'){
//         renderHtml('./contact.html', res);
//     }else{
//         renderHtml('./index.html', res);
//     }


// }).listen(port, () => {
//     console.log(`server is listening on port ${port}...`)
// });

