var http = require('http');
var fs = require('fs');

//this block is a manual process
var myReadStream = fs.createReadStream('./BeowulfEnding.txt', 'utf8');
var myWriteStream = fs.createWriteStream('./writeBook.txt');
myReadStream.on('data', function(chunk){
    console.log("new buffer received: " );
    console.log(chunk);
    myWriteStream.write(chunk); //sends chunk to the writeBook file
});

//this block is automated piping
myReadStream.pipe(myWriteStream);



