/*
Logic Layer
*/

// Model - 1. Factory and 2. Service
app.service("initcapservice",function(){
//app.factory("initcapfactory",function(){
   // Factory Always return an object
   // var object = {};
   // object.initcap= function(str){
    this.initcap = function(str){
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
    //return object;
});