app.controller('RootController', [
  '$scope',
  '$rootScope',
  '$state',
  function($scope, $rootScope, $state) {
    $scope.mobile = window.mobilecheck();

  }
]);