app.controller('WakeupController', [
  '$scope',
  '$rootScope',
  '$state',
  '$firebase',
  'User',
  function($scope, $rootScope, $state, $firebase, User) {
    console.log($scope.user);
  }
]);