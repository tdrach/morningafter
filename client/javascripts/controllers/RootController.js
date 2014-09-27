app.controller('RootController', [
  '$scope',
  '$rootScope',
  '$state',
  '$firebase',
  'User',
  function($scope, $rootScope, $state, $firebase, User) {
    $scope.mobile = window.mobilecheck();
    $rootScope.FIREBASE_URL = "https://morningafter.firebaseio.com/";
    $rootScope.FIREBASE_REF__users = new Firebase("https://morningafter.firebaseio.com/users");

    var authClient = new FirebaseSimpleLogin($rootScope.FIREBASE_REF__users, function(error, user) {
      if (error) {
        console.log(error);
      } else if (user) {
        User.set(user);
        $scope.user = user;       
        console.log($scope.user); 
        var sync = $firebase($rootScope.FIREBASE_REF__users.child(user.uid));
        $scope.user.data = sync.$asObject();
        $scope.hide_login = true;
        $state.go("root.profile");        
      }
    });

    $scope.loginTwitter = function() {
        authClient.login('twitter');
    };

  }
]);