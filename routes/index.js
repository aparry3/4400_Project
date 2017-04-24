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
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/users/:username-:password', function(req, res, next) {
  console.log("trying to get a users");
  conn.query('SELECT * FROM USER WHERE Username = "'+req.params.username+'" AND Password = "'+req.params.password+'"', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/user', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO USER SET ?', req.body, function (err, data) {
    if (err) return res.status(400).send();
    res.send(data);


  }));
});
router.get('/locations', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM LOCATION', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/locations', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM LOCATION WHERE ?',req.body, function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/location', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO LOCATION SET ?', req.body, function (err, data) {
    if (err) return res.status(400).send();
    res.send(data);

  }));
});
router.get('/data_points', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATAPOINT', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/pending_data_points', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATAPOINT WHERE Pending is NULL', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/data_points', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO DATAPOINT SET ?', req.body, function (err, data) {
    if (err) return res.status(400).send();
    res.send(data);

  }));
});
router.post('/filtered_data_points', function(req, res, next) {
  console.log("---------------------------------------------------------------" + req.body['POI']);
  var wheres = [];
  for (var key in req.body) {
    console.log(key);
    if (req.body[key] != null && req.body[key] != '') {

      if (key == 'lowDate') {
        var where = "Date_Time " + " > '" + req.body[key]+"'";
        wheres.push(where);

      } else if (key == 'highDate') {
        var where = "Date_Time " + " < '" + req.body[key]+"'";
        wheres.push(where);
      } else if (key == 'valueLow') {
        var where = "Value" + " > " + req.body[key]+"";
        wheres.push(where);
      }else if (key == 'valueHigh') {
        var where = "Value " + " < " + req.body[key]+"";
        wheres.push(where);
      }  else {
        var where = key + " = '" + req.body[key]+"'";
        wheres.push(where);
      }

    }
  }

  var where = wheres.join(' AND ');
  console.log(where);
  conn.query("SELECT * FROM DATAPOINT WHERE " + where +' ORDER BY DpDate;', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.put('/data_points/:poi/:date/:time/:pending', function(req, res, next) {
  console.log(req.params.poi);
  console.log(req.params.datetime);

  console.log(conn.query('UPDATE DATAPOINT SET Pending = "' + req.params.pending +'" WHERE POI = "'+req.params.poi+'" AND DpDate = "'+req.params.date +'"AND DpTime = "'+req.params.time.slice(0,19).replace('T', ' ')+'";', function (err, data) {
    if (err) {
      console.log(err)
      return res.status(400).send();
    }

  }));
});
router.get('/pois', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM POI', function (err, data) {
    if (err) return res.status(400).send();
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
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/poi_names', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT Name FROM POI', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/poi', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO POI SET ?', req.body, function (err, data) {
    if (err) return res.status(400).send();
    res.send(data);

  }));
});
router.get('/datatypes', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM DATATYPE', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/city_officials', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM CITYOFFICIAL', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/city_officials/:user', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM CITYOFFICIAL WHERE Username = "'+req.params.user+'"', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.get('/pending_city_officials', function(req, res, next) {
  console.log(req.body);
  conn.query('SELECT * FROM CITYOFFICIAL WHERE Pending is NULL', function (err, data) {
    if (err) return res.status(400).send();
    console.log(data);
    res.send(data);
  });
});
router.post('/city_officials', function(req, res, next) {
  console.log(req.body);
  console.log(conn.query('INSERT INTO CITYOFFICIAL SET ?', req.body, function (err, data) {
    if (err) return res.status(400).send();

  }));
});
router.put('/city_officials/:username/:pending', function(req, res, next) {

  console.log(conn.query('UPDATE CITYOFFICIAL SET Pending = '+req.params.pending+' WHERE Username = "'+req.params.username +'"' , function (err, data) {
    if (err) return res.status(400).send();

  }));
});
router.put('/flag_poi/:name/:date', function(req, res, next) {

  conn.query('UPDATE POI SET Flagged = 1, Date_Time_Flagged = "'+req.params.date+ '" WHERE Name = "'+req.params.name+'"' , function (err, data) {
    if (err) return res.status(400).send();

  });
});

router.get('/poi_all_info', function(req, res, next) {
  console.log(req.body);
  var query = `SELECT TM.Name, TM.City, TM.State, TM.Flagged, TM.MinMold, TM.MaxMold, TM.AvgMold, TM.CountMold, A.MinAir, A.MaxAir, A.AvgAir, A.CountAir FROM (

  (SELECT T.Name, T.City, T.State, T.Flagged, M.MinMold, M.MaxMold, M.AvgMold, M.CountMold FROM (

  ((SELECT Name, City, State, Flagged FROM POI) as T

      LEFT OUTER JOIN

  (SELECT p.Name, MIN(d.Value) as MinMold,Max(d.Value) as MaxMold,AVG(d.Value) as AvgMold ,COUNT(p.Name) as CountMold FROM POI p JOIN DATAPOINT d ON p.Name = d.POI WHERE d.DataType = 'Mold' GROUP BY p.Name, p.City, p.State, p.Flagged) AS M

  	ON T.Name = M.Name))) AS TM

      LEFT OUTER JOIN

  (SELECT p.Name, MIN(d.Value) as MinAir,Max(d.Value) as MaxAir,AVG(d.Value) as AvgAir ,COUNT(p.Name) as CountAir FROM POI p JOIN DATAPOINT d ON p.Name = d.POI WHERE d.DataType = 'Air Quality' GROUP BY p.Name, p.City, p.State, p.Flagged) AS A

  	ON TM.Name = A.Name);`
  conn.query(query, function (err, data) {
    if (err) return res.status(400).send();
    res.send(data);
  });
});


module.exports = router;
