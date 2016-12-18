app.controller("myctrl",function($scope,myfactory){
    $scope.loadData = function(){
        console.log("I am Calling a Server...");
        var promise = myfactory.talktoServer();
        for(var i = 1; i<=10; i++){
            console.log("Doing Something else...");
        }
        console.log("Now Asking for My Result");
        promise.then(function(data){
            $scope.result= data;
        },function (err){
            $scope.result = err;
        })
        
    }
})