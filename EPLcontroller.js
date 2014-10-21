/**
 * Created by tricom on 10/14/14.
 */
angular.module("EPLapp.EPLController",[])
    .controller('eplController',function($scope,sharedProperties){

    $scope.nameFilter=null;

        $scope.searchFilter = function (club) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(club.club.name);
        };


    $scope.clublist=sharedProperties.getProperty();

}).controller('clubController', function($scope, $routeParams,sharedProperties) {

        $scope.i = $routeParams.id;
        $scope.c=sharedProperties.getProperty();


    });