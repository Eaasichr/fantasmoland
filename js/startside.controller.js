(function(){

    angular
        .module("Main.startside", [])
        .controller("startsideController", startsideController);

    function startsideController($scope){
        $scope.startside = "Welcome to startside";
    }

}());