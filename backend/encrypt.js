const express = require('express')
const path = require('path')
const JsEncrypt = require('node-jsencrypt')
const bodyParser = require('body-parser')
const Cryptr=require('cryptr')
const app = express()
let key = ['MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDsqtEycw1yCVgACX+DtyP8GtVlEwti/A0c9wl9LtpPojGcFp0CBP97ne4JKYP5qggRxiH6jlZx6lGIGHHtM0aHh3R4+B2HsAeESSYBPCw73zIvzgU9YYhgVmYuOsa19K1Cdk6OA/6IOsTRXgrwzssLjGeekutwd2YYrVEi+q/4wIDAQAB']
const encrypt = new JsEncrypt()
const cryptr = new Cryptr('ridwan')
var port = process.env.PORT || 3001
const publicPath = path.join(__dirname, '..', 'build')

app.use(express.static(publicPath)) // goto the folder(static) directory

app.use(bodyParser.urlencoded({extended: false})) //reads what you post(url encoded data)
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'public',"index.html")) // select a particular file(index.html) in the folder(static) and send the file content as a response
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.use('/example',(req,res,next)=>{
    res.send(data[0])
})

app.post('/',(req,res)=>{  // send/post info to our server
   
    console.log(req.body)
    
    // var encrypted = cryptr.encrypt(req.body.inputData)
    // console.log(encrypted)
    if (req.body.channel == "TCPAPIC"){
    encrypt.setPublicKey(key[0])
    var encrypted = encrypt.encrypt(req.body.inputData)
    console.log(encrypted)
    
    res.send(encrypted)

    }
    else{
        res.send("select valid channel")
    }  
  
})


//console.log(localStorage.getItem('postedData'))
app.listen(port,()=>{
    console.log("server is up and running on port 3001")
})

