'use strict;'
angular.module('workApp',[]);
angular.module('portfolioApp',['ngRoute','workApp'])
    .controller('portfolioController',portfolioController)
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/about',{
            controller:'portfolioController',
            templateUrl:'modules/about/views/about.html'
        })
        
        .when('/academics',{
            controller:'',
            templateUrl:''
        })
        
        .when('/work',{
            controller:'workController',
            templateUrl:'modules/work/views/work.html'
        })
        .when('/contact',{
            controller:'',
            templateUrl:''
        })
        
        .otherwise({redirectTo:'/about'})
    
    }]);
    portfolioController.$inject = ['$scope'];
    function portfolioController($scope){
    
    }

