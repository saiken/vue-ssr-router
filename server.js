const path = require('path');
const fs = require('fs');
const express = require('express');
const VueServerRenderer = require('vue-server-renderer');

const app = express();
// useしないとSPAにならず、毎回サーバへアクセスしてしまう
app.use('/', express.static('public'));
app.use('/dist', express.static('dist'));

const template = fs.readFileSync(path.join(__dirname, 'src/index.template.html'), 'utf-8');
const renderer = VueServerRenderer.createBundleRenderer(path.join(__dirname, 'dist/vue-ssr-server-bundle.json'), { template });

app.get('/api/sleep5', (req, res) => {
  console.log(req.url);
  setTimeout(() => {
    console.log('sleeped');
    res.end('success');
  }, 5000);
});

app.get('*', (req, res) => {
  console.log(req.url);
  const ctx = { url: req.url };
  renderer.renderToString(ctx, (err, html) => {
    if (err) { 
      console.log(err);
      return res.status(500).end('Interval Server Error');
    }
    res.end(html);
  });
});

app.listen(8080);
