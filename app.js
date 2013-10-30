var express = require('express'),
    mu2Express = require('mu2Express'),
    app = express();

app.engine('mustache', mu2Express.engine);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('article', {
    'locals': {
      'items' : [
        { 'name': 'item 1' },
        { 'name': 'item 2' },
        { 'name': 'item 3' },
        { 'name': 'item 4' }
      ]
    }
  });
});

app.listen(3000);
console.log('listening on port 3000');
