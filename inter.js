var express = require('express');
var app = express();
var fs = require('fs');

translate = require('google-translate-api');

app.get('/',function(req,res)
{
   var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('./english.txt')
      });
   var item=[];
   lineReader.on('line', function (line) {
         item.push(line);
         if(item.length == 100)
            calc(item,i);            
   });
   var i=0;

   res.send();
})

function calc(item,i)
{
   console.log(item);
   if(item[i]!=null)
   {
      translate(item[i], {from: 'en', to: 'zh-cn'}).then(resp => {                 
            fs.appendFileSync('./chinese.txt',resp.text+"\n");
            i++;
            calc(item,i);
      }).catch(errr => {
                   console.error(errr);
      });
   }
}

var port = process.env.PORT || '4300';
app.set('port', port);

//Listen on provided port, on all network interfaces.
app.listen(4300, function () {
    console.log('Server Started on Port 4300...');
})