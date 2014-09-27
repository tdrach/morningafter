app.controller('SurveyController', [
  '$scope',
  '$rootScope',
  '$state',
  'User',
  function($scope, $rootScope, $state, User) {    

    $scope.questions = [
      {
        "prompt": "What is your worst exes name?",
        "answer": ""
      },      
      {
        "prompt": "Social?",
        "answer": ""
      },      
      {
        "prompt": "Political affiliation?",
        "answer": ""
      }

    ];



  }
]);