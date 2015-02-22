/**
 * Created by Vadym on 15/10/14.
 */


// get the Nerd model
var Temperature = require('./models/Temperature'),
    Humidity = require('./models/Humidity'),
    Approximation = require('./models/Approximation'),
    Fan = require('./models/Fan');

module.exports = function (app) {

    // server routes =================================

    //app.get('/api/fan', function (req, res) {
    //    Fan.find()
    //        .sort({'date': -1})
    //        .limit(1)
    //        .exec(function (err, fan) {
    //            if (err)
    //                res.status(400).send(err);
    //
    //            res.status(200).json(fan);
    //        });
    //});
    
    //app.put('api/fan', function (req, res) {
    //    //Fan.create({
    //    //    on: req.body.
    //    //})
    //});

    // api route
    app.get('/api/temperature', function (req, res) {

        var limit = 0;

        if (parseInt(req.param('limit')) > 0)
            limit = parseInt(req.param('limit'));
        // use mongoose to get all in db
        if (!req.param('name')) {
            Temperature.find()
                .sort({'date': -1})
                .limit(limit)
                .exec(function (err, temperatures) {

                    if (err)
                        res.status(400).send(err);

                    res.status(200).json(temperatures);
                });
        } else {
            Temperature.find()
                .where('name').equals(req.param('name'))
                .sort({'date': -1})
                .limit(limit)
                .exec(function (err, temperatures) {

                    if (err)
                        res.status(400).send(err);

                    res.status(200).json(temperatures);
                });
        }
    });

    app.put('/api/temperaturev2', function (req, res) {

//        if (req.param('Temp1') < req.param('Temp2')) {
//
//              $.ajax({
//                type: 'PUT',
//                url: 'http://10.10.60.4:5000/?port=1&value=1'
//            }).done({
//
//            });
//            sleep(10000);
//            //return;
//
//        }
        Temperature.create({
            value: req.param('Temp1'),
            name: 'Sensor1'
        }, function (err, temperature) {

            if(err)
                res.status(400).send(err);

            //res.status(200).send();

            Temperature.create({
                value: req.param('Temp2'),
                name: 'Sensor2'
            }, function (err, temperature) {

                if(err)
                    res.status(400).send(err);

                res.status(200).send();
            });
        });

    });

    app.put('/api/temperature', function (req, res) {

        Temperature.create({
            value: req.body.value,
            name: req.body.name
        }, function (err, temperature) {

            if(err)
                res.status(400).send(err);

            res.status(200).send();
        });
    });

    // create
    app.post('/api/temperature', function (req, res) {

        Temperature.create({
            value: req.body.value,
            name: req.body.name
        }, function (err, temperature) {

            if(err)
                res.status(400).send(err);

            res.status(200).send();
        });
    });
    // api route
    app.get('/api/humidity', function (req, res) {

        var limit = req.param("limit");

        if (limit) {
            limit = parseInt(limit);
        } else
            limit = 0;

        // use mongoose to get all in db
        Humidity
            .find()
            .limit(limit)
            .exec(function (err, humidity) {

            if (err)
                res.status(400).send(err);

            res.status(200).json(humidity);
        });
    });

    // create
    app.post('/api/humidity', function (req, res) {

        Humidity.create({
            value: req.body.value
        }, function (err) {

            if(err)
                res.status(400).send(err);

            res.status(200).send();
        });
    });

    // get approximation
    app.get('/api/approximation', function (req, res) {

        // use mongoose to get all in db
        Approximation.find().exec(function (err, approximation) {

            if (err)
                res.status(400).send(err);

            res.status(200).json(approximation);
        });
    });

    // create approximation entry
    app.post('/api/approximation', function (req, res) {

        Approximation.create({
            value: req.body.value
        }, function (err) {

            if(err)
                res.status(400).send(err);

            res.status(200).send();
        });
    });

    // frontend routes =========================================================


    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load public/index.html file
    });
};