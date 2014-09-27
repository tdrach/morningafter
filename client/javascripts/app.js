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
        .state('profile', {
            url: '/profile/:user',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })          
        .state('profile.questions', {
            url: '/questions',
            templateUrl: 'templates/questions.html',
            controller: 'QuestionsController'
        })                      
        ;
});






