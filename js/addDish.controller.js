(function () {

    angular
        .module("Main.addDish", [])
        .controller("addDishController", addDishController);

    function addDishController($scope, $http) {
        $scope.createDish = function () {
            var newDish = {
                month: $scope.month,
                year: $scope.year,
                place: $scope.place,
                dish: $scope.dish
            }
            $http.post('http://188.166.0.128:3000/addDish', newDish)
                .success(function (data) {
                    console.log("Dish created");
                    console.log(data);
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }
    }

}());