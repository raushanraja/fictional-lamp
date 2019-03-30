const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.
app.use('/', router);
app.get('*', function(req, res) { res.sendFile(path.join(__dirname+'/public/index.html'));
 });
app.listen(process.env.port || 4000);

//console.log('Running at Port 3000');
