var express = require('express');
var router = express.Router();
var conn = require('../connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  console.log("trying to get users");
  conn.query('SELECT * FROM USER', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.get('/users/:username-:password', function(req, res, next) {
  console.log("trying to get a users");
  conn.query('SELECT * FROM USER WHERE Username = "'+req.params.username+'" AND Password = "'+req.params.password+'"', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/user', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO USER SET ?', req.body, function (err, data) {
    if (err) throw err;

  }));
});
router.get('/locations', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM LOCATION', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/location', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO LOCATION SET ?', req.body, function (err, data) {
    if (err) throw err;

  }));
});
router.get('/data_points', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATAPOINT', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.get('/pending_data_points', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATAPOINT WHERE Pending = 1', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/data_points', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO DATAPOINT SET ?', req.body, function (err, data) {
    if (err) throw err;

  }));
});
router.post('/filtered_data_points', function(req, res, next) {
  console.log("---------------------------------------------------------------" + req.body['POI']);
  var wheres = [];
  for (var key in req.body) {
    console.log(key);
    if (req.body[key] != null && req.body[key] != '') {

      if (key == 'low_date') {
        var where = "Date_Time " + " > '" + req.body[key]+"'";
        wheres.push(where);

      } else if (key == 'high_date') {
        var where = "Date_Time " + " < '" + req.body[key]+"'";
        wheres.push(where);
      } else if (key == 'valuelow') {
        var where = "Value " + " < '" + req.body[key]+"'";
        wheres.push(where);
      }else if (key == 'valuehigh') {
        var where = "Value " + " < '" + req.body[key]+"'";
        wheres.push(where);
      }  else {
        var where = key + " = '" + req.body[key]+"'";
        wheres.push(where);
      }

    }
  }

  var where = wheres.join(' AND ');
  console.log(where);
  conn.query("SELECT * FROM DATAPOINT WHERE " + where +';', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.put('/data_points/:poi/:datetime', function(req, res, next) {
  console.log(req.params.poi);
  console.log(req.params.datetime);

  console.log(conn.query('UPDATE DATAPOINT SET Pending = "0" WHERE POI = "'+req.params.poi+'" AND Date_Time = "'+req.params.datetime.slice(0,19).replace('T', ' ')+'";', function (err, data) {
    if (err) throw err;

  }));
});
router.delete('/data_points/:poi/:datetime', function(req, res, next) {
  console.log(req.params.poi);
  console.log(req.params.datetime);

  console.log(conn.query('DELETE FROM DATAPOINT WHERE POI = "'+req.params.poi+'" AND Date_Time = "'+req.params.datetime.slice(0,19).replace('T', ' ')+'";', function (err, data) {
    if (err) throw err;

  }));
});
router.get('/pois', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM POI', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/pois_filtered', function(req, res, next) {
  console.log("---------------------------------------------------------------" + req.body);
  var wheres = [];
  for (var key in req.body) {
    console.log(key);
    if (req.body[key] != null && req.body[key] != '') {

      if (key == 'LowDate') {
        var where = "Date_Time_Flagged " + " > '" + req.body[key]+"'";
        wheres.push(where);

      } else if (key == 'HighDate') {
        var where = "Date_Time_Flagged " + " < '" + req.body[key]+"'";
        wheres.push(where);
      } else {
        var where = key + " = '" + req.body[key]+"'";
        wheres.push(where);
      }

    }
  }
  var query = "SELECT * FROM POI "
  if (wheres.length > 0) {
    query += "WHERE "
  }
  var where = wheres.join(' AND ');
  console.log(where);
  conn.query(query + where +';', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.get('/poi_names', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT Name FROM POI', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/poi', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO POI SET ?', req.body, function (err, data) {
    if (err) throw err;

  }));
});
router.get('/datatypes', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATATYPE', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.get('/city_officials', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM CITYOFFICIAL', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.get('/pending_city_officials', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM CITYOFFICIAL WHERE Pending = 1', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
router.post('/city_officials', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO CITYOFFICIAL SET ?', req.body, function (err, data) {
    if (err) throw err;

  }));
});
router.put('/city_officials/:username', function(req, res, next) {

  console.log(conn.query('UPDATE CITYOFFICIAL SET Pending = "0" WHERE Username = "'+req.params.username +'"' , function (err, data) {
    if (err) throw err;

  }));
});
router.delete('/city_officials/:username', function(req, res, next) {

  console.log(conn.query('DELETE FROM CITYOFFICIAL WHERE Username = "'+req.params.username+'"', function (err, data) {
    if (err) throw err;

  }));
});


module.exports = router;