(function(){

'use strict;'

angular.module('portfolioApp',['ngRoute'])
    .controller('portfolioController',portfolioController)
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/about',{
            controller:'portfolioController',
            templateUrl:'views/about.html'
        })
        
        .when('/academics',{
            controller:'',
            templateUrl:''
        })
        
        .when('/work',{
            controller:'workController',
            templateUrl:'views/work.html'
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
    
    
})();

