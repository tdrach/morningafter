var app = angular.module('app', [
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'ui.router',
    'firebase'
]).config(function($urlRouterProvider, $stateProvider, $httpProvider, $anchorScrollProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'templates/root.html',
            controller: 'RootController'
        })                      
        ;
});






