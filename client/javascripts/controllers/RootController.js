app.controller('RootController', [
  '$scope',
  '$rootScope',
  '$state',
  function($scope, $rootScope, $state) {
    $scope.mobile = window.mobilecheck();
    $rootScope.FIREBASE_URL = "https://morningafter.firebaseio.com/";
    $rootScope.FIREBASE_REF__users = new Firebase("https://morningafter.firebaseio.com/users");


    $scope.loginTwitter = function() {
      var authClient = new FirebaseSimpleLogin($rootScope.FIREBASE_REF__users, function(error, user) {
        $rootScope.user = user;
        $state.go("profile", {'user': user.uid});
      });
        authClient.login('twitter');
    };

  }
]);