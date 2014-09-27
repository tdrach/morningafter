app.controller('ProfileController', [
  '$scope',
  '$rootScope',
  '$state',
  '$stateParams',
  'User',
  function($scope, $rootScope, $state, $stateParams, User) {

    $scope.done = function() {
      User.setTime($scope.user.data.wakeUpTime);
      User.saveTime($scope.user.uid, $scope.user.data.wakeUpTime);
    };


  }
]);