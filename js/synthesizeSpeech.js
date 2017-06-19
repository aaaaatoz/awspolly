var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var polly = new AWS.Polly();

 var params = { 
  OutputFormat: "mp3", 
  SampleRate: "8000", 
  Text: "All Gaul is divided into three parts", 
  TextType: "text", 
  VoiceId: "Joanna"
 };

 polly.synthesizeSpeech(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else  {
   var fs = require('fs');
   var wstream = fs.createWriteStream('myoutput.mp3');
   wstream.write(data.AudioStream);
   wstream.end();
   var util = require('util'),
       exec = require('child_process').exec,
       child;
   child = exec('open myoutput.mp3',null)
   }
 });
