var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM resume;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};
exports.getacAll = function(callback) {
    var query = 'SELECT * FROM account;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO resume (fname, lname, rname, account_id) VALUES (?,?,?,?)';
    var queryData = [params.fname, params.lname, params.rname, params.account_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.update = function(params, callback) {
    var query = 'UPDATE resume SET rname = ?, fname = ?, lname = ?, account_id = ? WHERE resume_id = ?';
    var queryData = [params.rname, params.fname, params.lname, params.account_id, params.resume_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

