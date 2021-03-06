app.service('User', function($rootScope, $state, $firebase) {
    var User = {};

    function onSetComplete(error) {
      console.log("Set finished", error);
    };

    User.set = function(user) {
      User.info = user;
    },

    User.setTime = function(time) {
      User.wakeUpTime = time;
    },

    User.uid = function() {
      return User.uid;
    },

    User.wakeUpTime = function() {
      return User.wakeUpTime;
    },

    User.saveTime = function(userId, wakeUpTime) {
      var usersRef = new Firebase("https://morningafter.firebaseio.com/users");
      usersRef.child(userId).once('value', function(snapshot) {
        if (snapshot.val() !== null) {
          $rootScope.FIREBASE_REF__users.child(userId).update({
              'wakeUpTime': wakeUpTime
          }, function() {
            $state.go("root.importance");
          });
        } else {
          $rootScope.FIREBASE_REF__users.child(userId).push({
              'wakeUpTime': wakeUpTime
          }, function(){
            $state.go("root.importance");
          }); 
        }
      });
    },

    User.saveEx = function(userId, ex) {
      User.ex = ex;
      var usersRef = new Firebase("https://morningafter.firebaseio.com/users");
        $rootScope.FIREBASE_REF__users.child(userId).update({
            'ex': {
              'name': ex.name,
              'number': ex.number
            }
        }, function() {
          $state.go("root.exPrep");
        });
    }

    return User;
});