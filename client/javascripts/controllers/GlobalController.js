app.controller('GlobalController', [
  '$scope',
  '$rootScope',
  '$state',
  '$firebase',
  'User',
  function($scope, $rootScope, $state, $firebase, User) {
    $scope.$state = $state;
  }
]);