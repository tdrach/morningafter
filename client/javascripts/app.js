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
        .state('root.profile', {
            url: 'profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })          
        .state('root.survey', {
            url: 'survey',
            templateUrl: 'templates/survey.html',
            controller: 'SurveyController'
        })                      
        ;
});






