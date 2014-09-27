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


    $scope.saveImportance = function() {
      $state.go("root.exInfo");
      // User.saveImportance($scope.user.uid, $scope.user.uid.importance);
      // console.log(importance);
      // User.saveImportance($scope.user.uid, $scope.user.data.importance);
    }

  }
]);