angular.module('workApp',[])
    .controller('workController',workController)

workController.$inject = ['$scope'];
function workController($scope){
    $scope.companyName = 'Mu Sigma Business Solution Pvt. Ltd.';
}