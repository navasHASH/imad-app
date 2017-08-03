var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
articleone: {
    title : `article one`,
  heading: `Article One`,
  date:`Sep 4 2017`,
  content:` <p>
            This is the content for my first article. This is the content for my first article. This is the content for my first article.    This is the content for my first article.    this is the content for my first article.    This is the content for my first article.        
                
            </p>
            <p>
              This is the content for my first article. This is the content for my first article. This is the content for my first article.    This is the content for my first article.    this is the content for my first article.    This is the content for my first article.        
                  
            </p>
                <p>
              This is the content for my first article. This is the content for my first article. This is the content for my first article.    This is the content for my first article.    this is the content for my first article.    This is the content for my first article.        
                  
            </p>`
},
articletwo: {
    title :`article two`,
  heading: `Article two`,
  date:`Sep 4 2017`,
  content:` <p>
            This is the content for my second article.
            </p>`
},
articlethree:   {
  title: `Article three | Navas Hashim`,
  heading: `Article three`,
  date:`Sep 4 2017`,
  content:` <p>
            This is the content for my third article.
            </p>`
}
};

function createtemplate(datada)
{
    var heading = datada.heading;
var template=
`<html>
    <head>
        <title>
          helo
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1"/>
      <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/" >HOME</a>
            
        </div>
        <h3>
           dddd
        </h3>
        <div>
        $[heading]
        </div>
        <div>
          dddd
        </div>
        </div>
    </body>
</html>
`;
return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res){
    var articleName= req.params.articleName;
      res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
