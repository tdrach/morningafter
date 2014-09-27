var app = angular.module('app', [
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'ui.router',
    'firebase'
]).config(function($urlRouterProvider, $stateProvider, $httpProvider, $anchorScrollProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/welcome');
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'templates/root.html',
            controller: 'RootController'
        })          
        .state('root.welcome', {
            url: 'welcome',
            templateUrl: 'templates/welcome.html',
            controller: 'RootController'
        })         
        .state('root.auth', {
            url: 'auth',
            templateUrl: 'templates/auth.html',
            controller: 'RootController'
        })          
        .state('root.profile', {
            url: 'profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })         
        .state('root.importance', {
            url: 'importance',
            templateUrl: 'templates/importance.html',
            controller: 'ProfileController'
        })         
        .state('root.exInfo', {
            url: 'exInfo',
            templateUrl: 'templates/exInfo.html',
            controller: 'SurveyController'
        })         
        .state('root.exPrep', {
            url: 'exPrep',
            templateUrl: 'templates/exPrep.html',
            controller: 'SurveyController'
        })         
        .state('root.goodnight', {
            url: 'goodnight',
            templateUrl: 'templates/goodnight.html',
            controller: 'SurveyController'
        })         
        .state('root.wakeup', {
            url: 'wakeup',
            templateUrl: 'templates/wakeup.html',
            controller: 'WakeupController'
        })         
        .state('root.start', {
            url: 'start',
            templateUrl: 'templates/itsTime.html',
            controller: 'WakeupController'
        })        
        .state('root.forget', {
            url: 'forget',
            templateUrl: 'templates/forget.html',
            controller: 'WakeupController'
        })         
        .state('root.quiz', {
            url: 'quiz',
            templateUrl: 'templates/quiz.html',
            controller: 'WakeupController'
        })         
        .state('root.q1', {
            url: 'q1',
            templateUrl: 'templates/q1.html',
            controller: 'WakeupController'
        })          
        .state('root.q2', {
            url: 'q2',
            templateUrl: 'templates/q2.html',
            controller: 'WakeupController'
        })           
        .state('root.q3', {
            url: 'q3',
            templateUrl: 'templates/q3.html',
            controller: 'WakeupController'
        })           
        .state('root.gotcha', {
            url: 'gotcha',
            templateUrl: 'templates/gotcha.html',
            controller: 'WakeupController'
        })         
        .state('root.done', {
            url: 'done',
            templateUrl: 'templates/done.html',
            controller: 'WakeupController'
        })                      
        ;
});






;app.controller('GlobalController', [
  '$scope',
  '$rootScope',
  '$state',
  '$firebase',
  'User',
  function($scope, $rootScope, $state, $firebase, User) {
    $scope.$state = $state;
  }
]);;app.controller('ProfileController', [
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
]);;app.controller('RootController', [
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
]);;app.controller('SurveyController', [
  '$scope',
  '$rootScope',
  '$state',
  'User',
  function($scope, $rootScope, $state, User) {    

    $scope.ex = User.ex;

    $scope.saveEx = function() {
      User.saveEx($scope.user.uid, $scope.ex);
    };



  }
]);;app.controller('WakeupController', [
  '$scope',
  '$rootScope',
  '$state',
  '$firebase',
  'User',
  function($scope, $rootScope, $state, $firebase, User) {
    console.log($scope.user);
  }
]);;(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init("eb3c72f860a91f45ea6a13356a29b5f9");;window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; 
}
;app.service('User', function($rootScope, $state, $firebase) {
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