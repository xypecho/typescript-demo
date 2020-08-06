"use strict";
var mysqlDb = /** @class */ (function () {
    function mysqlDb() {
    }
    mysqlDb.prototype.add = function (info) {
        console.log(info);
        throw new Error("Method not implemented.");
    };
    mysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    mysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return mysqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.name = 'admin';
u.password = '123456';
var omysqlDb = new mysqlDb();
omysqlDb.add(u);
