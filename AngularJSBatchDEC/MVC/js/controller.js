/*
It is Acting in B/w View and Model
*/

//$scope - Injecting the $scope object in the controller
// $scope - it a glue b/w view and controller
app.controller("welcomectrl",function($scope,initcapservice){
$scope.sayWelcome=function(){
$scope.fullname = initcapservice.initcap($scope.firstname) + initcapservice.initcap($scope.lastname);
}
})