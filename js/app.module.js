(function() {
    'use strict';

    angular
        .module('Main', [
        	'ngRoute',
            'Main.retter',
            'Main.startside',
            'Main.addDish'
            ]
        )
        .config(function($routeProvider){
        	$routeProvider
                .when('/', {
                    templateUrl: '../view/startside.html',
                    controller: 'startsideController'
                })
				.when('/retter', {
					templateUrl: '../view/retter.html',
					controller: 'retterController'
				})
                .when('/addDish', {
                    templateUrl: '../view/addDish.html',
                    controller: 'addDishController'
                })
        		.otherwise({ redirectTo: '/' });
        })
}());
