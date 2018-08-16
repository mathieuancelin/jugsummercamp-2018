const express = require('express');
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');

const secret = require('./utils/connected').secret;

function head() {
  return `
  <head>
    <title>My TVShows - admin</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500" rel="stylesheet"></link>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/solid-gauge.js"></script>

    <style>
    /*
    * Base structure
    */
   
   /* Move down content because we have a fixed navbar that is 50px tall */
   body {
     padding-top: 50px;
   }
   
   
   /*
    * Global add-ons
    */
   
   .sub-header {
     padding-bottom: 10px;
     border-bottom: 1px solid #eee;
   }
   
   /*
    * Top navigation
    * Hide default border to remove 1px line.
    */
   .navbar-fixed-top {
     border: 0;
   }
   
   /*
    * Sidebar
    */
   
   /* Hide for mobile, show later */
   .sidebar {
     display: none;
   }
   @media (min-width: 768px) {
     .sidebar {
       position: fixed;
       top: 51px;
       bottom: 0;
       left: 0;
       z-index: 1000;
       display: block;
       padding: 20px;
       overflow-x: hidden;
       overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
       background-color: #f5f5f5;
       border-right: 1px solid #eee;
     }
   }
   
   /* Sidebar navigation */
   .nav-sidebar {
     margin-right: -21px; /* 20px padding + 1px border */
     margin-bottom: 20px;
     margin-left: -20px;
   }
   .nav-sidebar > li > a {
     padding-right: 20px;
     padding-left: 20px;
   }
   .nav-sidebar > .active > a,
   .nav-sidebar > .active > a:hover,
   .nav-sidebar > .active > a:focus {
     color: #fff;
     background-color: #428bca;
   }
   
   
   /*
    * Main content
    */
   
   .main {
     padding: 20px;
   }
   @media (min-width: 768px) {
     .main {
       padding-right: 40px;
       padding-left: 40px;
     }
   }
   .main .page-header {
     margin-top: 0;
   }
   
   
   /*
    * Placeholder dashboard ideas
    */
   
   .placeholders {
     margin-bottom: 30px;
     text-align: center;
   }
   .placeholders h4 {
     margin-bottom: 0;
   }
   .placeholder {
     margin-bottom: 20px;
   }
   .placeholder img {
     display: inline-block;
     border-radius: 50%;
   }
    </style>
  </head>
  `;
}

function home() {
  return `
  <html>
    ${head()}
    <body>
      <div id="app"></div>
      <script src="/js/bundle/app.js"></script>
      <script>JSC.initAdminNew(document.getElementById("app"))</script>
    </body>
  </html>`;
}

function route(app, argv) {
  app.get('/admin', (req, res) => {
    res
      .status(200)
      .type('html')
      .send(home());
  });
  app.get('/admin/me', (req, res) => {
    const decoded = jsonwebtoken.verify(req.get('Otoroshi-Claim'), secret);
    res.status(200).send(decoded);
  });
}

function start(argv, port = 9091) {
  const internalApp = express();
  internalApp.use(bodyParser.json(), express.static('public'));
  route(internalApp, argv);
  internalApp.listen(port, () => {
    console.log(`jugsummercamp-admin-old listening on port ${port}!`);
  });
}

exports.route = route;
exports.start = start;
