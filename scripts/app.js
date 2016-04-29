'use strict';
var confusionApp = angular.module('confusionApp', ['ngRoute']);

confusionApp
        .config(function($routeProvider) {
                $routeProvider
                    // route for the contactus page
                    .when('/contactus', {
                        templateUrl : './html/contactus.html',
                        controller  : 'ContactController'
                    })
                    // route for the menu page
                    .when('/menu', {
                        templateUrl : './html/menu.html',
                        controller  : 'MenuController'
                    })
                    // route for the dish details page
                    .when('/menu/:id', {
                        templateUrl : './html/dishdetail.html',
                        controller  : 'DishDetailController'
                    })
                    .otherwise('/menu');
        })
