app.controller('ProfileController', [
  '$scope',
  '$rootScope',
  '$state',
  '$stateParams',
  function($scope, $rootScope, $state, $stateParams) {

    $scope.done = function() {
      $rootScope.user.wakeUpTime = $scope.user. wakeUpTime;
      console.log("done", $rootScope.user.wakeUpTime);
      $state.go('profile.questions', {'user': $stateParams.user});
    };

  }
]);