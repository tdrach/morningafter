app.controller('SurveyController', [
  '$scope',
  '$rootScope',
  '$state',
  'User',
  function($scope, $rootScope, $state, User) {    

    $scope.ex = User.ex;

    $scope.saveEx = function() {
      User.saveEx($scope.user.uid, $scope.ex);
    };



  }
]);