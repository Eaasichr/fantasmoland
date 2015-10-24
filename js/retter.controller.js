(function(){

    angular
        .module("Main.retter", [])
        .controller("retterController", retterController);

    function retterController($scope, $http){
        $http.get("/menuer")
            .then(function(response){
                $scope.menuer = response.data;
            });


        $scope.removeDish = function(id){
            console.log("Removing dish");
            console.log(id);
            $http.post('http://188.166.0.128:3000/removeDish', {id: id})
                .success(function(data){
                    console.log("Dish deleted");
                    $http.get("/menuer")
            .then(function(response){
                $scope.menuer = response.data;
            });
                })
                .error(function(data){
                    console.log("Error");
                });
        }
    }

}());