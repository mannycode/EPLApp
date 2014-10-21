/**
 * The Root module
 * routeProvider routes to view1 by default or view2 if a given club is selected(with an id)
 */
var demoApp=angular.module("EPLapp",['EPLapp.EPLController','EPLapp.EPLServices','ngRoute']);



demoApp.config(function($routeProvider){
    $routeProvider.when('/view1',{
        controller:'eplController',
        templateUrl:'partials/view1.html'
    }).when('/view2/:id', {
        controller: 'clubController',
        templateUrl: 'partials/view2.html'
    }).otherwise({redirectTo:'/view1'});

});
