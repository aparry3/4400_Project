var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'',
  database:'db_proj'

});
module.exports = conn;
