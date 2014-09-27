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

    $scope.hide_logout = true;

    var authClient = new FirebaseSimpleLogin($rootScope.FIREBASE_REF__users, function(error, user) {
      if (error) {
        console.log(error);
        $state.go("root.welcome");
      } else if (user) {
        User.set(user);
        $scope.user = user;       
        console.log($scope.user); 
        var sync = $firebase($rootScope.FIREBASE_REF__users.child(user.uid));
        $scope.user.data = sync.$asObject();
        $scope.hide_login = true;
        $scope.hide_logout = false;
        if($state.current.name === "root.wakeup") {
          return;
        } else {
          $state.go("root.profile");
        }
      }
    });

    $scope.loginTwitter = function() {
        authClient.login('twitter');
    };

    $scope.logout = function() {
      authClient.logout();
      $scope.hide_login = false;
      $scope.hide_logout = true;
      $state.go("root");
    };

  }
]);