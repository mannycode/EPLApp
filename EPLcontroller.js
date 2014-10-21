/**
 *The eplController controls view1 that presents the points table
 * The clubController controls view2 that presents the individual club details. Both share the clublist2 array
 * via the service sharedProperties
 *
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