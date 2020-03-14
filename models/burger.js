// require orm object
var orm = require("../config/orm.js");

// define burger object
var burger = {
    all: function(cb){
        orm.selectAll("burgers",cb);
    },
    create:function(data,cb){
        orm.insertOne("burgers",data,cb);
    },
    update:function(data,condition,cb){
        orm.updateOne("burgers",data,condition,cb);
    }
}

// export burger object
module.exports = burger;