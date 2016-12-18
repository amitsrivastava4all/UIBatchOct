app.factory("myfactory",function($http,$q){
var object = {};
    object.talktoServer=function(){
        var pr = $q.defer();
        // $http.get(config.url).then(successFn, FailFn);
        $http.get(config.url).then(function(result){
            pr.resolve(result);
        },function(er){
            pr.reject(er);
        });
        return pr.promise;
    }
return object;    
})