var app = angular.module('app', [
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'ui.router',
    'firebase'
]).config(function($urlRouterProvider, $stateProvider, $httpProvider, $anchorScrollProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/welcome');
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'templates/root.html',
            controller: 'RootController'
        })          
        .state('root.welcome', {
            url: 'welcome',
            templateUrl: 'templates/welcome.html',
            controller: 'RootController'
        })         
        .state('root.auth', {
            url: 'auth',
            templateUrl: 'templates/auth.html',
            controller: 'RootController'
        })          
        .state('root.profile', {
            url: 'profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })         
        .state('root.importance', {
            url: 'importance',
            templateUrl: 'templates/importance.html',
            controller: 'ProfileController'
        })         
        .state('root.exInfo', {
            url: 'exInfo',
            templateUrl: 'templates/exInfo.html',
            controller: 'SurveyController'
        })         
        .state('root.exPrep', {
            url: 'exPrep',
            templateUrl: 'templates/exPrep.html',
            controller: 'SurveyController'
        })         
        .state('root.goodnight', {
            url: 'goodnight',
            templateUrl: 'templates/goodnight.html',
            controller: 'SurveyController'
        })                      
        ;
});






