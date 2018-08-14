var express = require('express'),
    app = express(),
    port = process.env.PORT || 3020,
    bodyParser = require('body-parser');
var cors = require('cors');
var exec = require('child_process').exec;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.listen(port);
app.timeout = 300000;  


app.get('/test', function (req, res) {
    res.end("Success!");
})

app.get('/rinteger', function (req, res) {

    exec('sh /home/ubuntu/deploy/rinteger.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);

            console.log(`${stderr}`);
            res.json(true);
            if (error !== null) {
                console.log(`exec error: ${error}`);
                res.json(false);
            }
        });

})

app.get('/rintegerservice', function (req, res) {

    exec('sh /home/ubuntu/deploy/rinteger-service.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);

            console.log(`${stderr}`);
            res.json(true);
            if (error !== null) {
                console.log(`exec error: ${error}`);
                res.json(false);
            }
        });

})

app.get('/rintegeradmin', function (req, res) {

    exec('sh /home/ubuntu/deploy/rinteger-admin.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);

            console.log(`${stderr}`);
            res.json(true);
            if (error !== null) {
                console.log(`exec error: ${error}`);
                res.json(false);
            }
        });

})

app.get('/rintegeradminservice', function (req, res) {

    exec('sh /home/ubuntu/deploy/rinteger-admin-service.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);

            console.log(`${stderr}`);
            res.json(true);
            if (error !== null) {
                console.log(`exec error: ${error}`);
                res.json(false);
            }
        });

})

console.log('Deploy App started on: ' + port);

