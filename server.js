const { join } = require('path');
const { readFileSync } = require('fs');
const express = require('express');
const VueServerRenderer = require('vue-server-renderer');

const app = express();
app.use('/dist', express.static('dist'));

const template = readFileSync(join(__dirname, 'src/index.template.html'), 'utf-8');
const renderer = VueServerRenderer.createBundleRenderer(join(__dirname, 'dist/vue-ssr-server-bundle.json'), { template });

app.get('/api/sleep5', (req, res) => {
    console.log(req.url);
    setTimeout(() => {
        console.log('sleeped');
        res.end('{title:"hoge title"}');
    }, 3000);
});

app.get('/api/weather', (req, res) => {
    setTimeout(() => {
        console.log(req.url);
        res.json({ title: 'tokyo', description: 'Sunny!!' });
    }, 2000);
});

app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

app.get('*', (req, res) => {
    console.log(req.url);
    const context = { url: req.url };
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.url) {
                res.redirect(err.url);
            }
            console.log(err);
            return res.status(500).end('Interval Server Error');
        }
        res.end(html);
    });
});

app.listen(8080);
