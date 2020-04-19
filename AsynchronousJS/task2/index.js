/*

This task has been taken from here (https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge)
and won't work locally.

So you need to take the code from inside of the getUserData (index.js) and put it in the
module.export func to see if and how it works

*/
var central = require('./central'), db1 = require('./db1'), db2 = require('./db2'), db3 = require('./db3'), vault = require('./vault'), mark = require('./mark');
function getUserData(id) {
    var dbs = new Map([
        ['db1', db1],
        ['db2', db2],
        ['db3', db3]
    ]);
    function getGeneralData(id) {
        var dbWithUser;
        return central(id)
            .then(function (dbName) {
            dbWithUser = dbName;
            return dbs.get(dbName);
        })["catch"](function () {
            return Promise.reject('Error central');
        })
            .then(function (db) {
            return db(id);
        })
            .then(function (user) {
            return Object.assign(user, { id: id });
        })["catch"](function (err) {
            if (err)
                return Promise.reject(err);
            return Promise.reject('Error ' + dbWithUser);
        });
    }
    function getSensitiveData(id) {
        return vault(id)["catch"](function () { return Promise.reject('Error vault'); });
    }
    return Promise.all([getGeneralData(id), getSensitiveData(id)])
        .then(function (_a) {
        var generalData = _a[0], vaultData = _a[1];
        return Object.assign(generalData, vaultData);
    })
        .then(function (userData) {
        mark(id);
        return Promise.resolve(userData);
    });
}
