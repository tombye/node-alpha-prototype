var express = require('express'),
    mu2Express = require('mu2Express'),
    app = express();

app.engine('mustache', mu2Express.engine);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
  res.render('index', {
    'locals': {
      'name': 'world'
    }
  });
});

app.listen(3000);
console.log('listening on port 3000');
