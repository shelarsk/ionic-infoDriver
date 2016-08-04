angular.module('starter.controllers', ['starter.services','ionic','ngSanitize','ngStorage','ngCordova','nvd3'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($rootScope) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:show')
        return config
      },
      response: function(response) {
        $rootScope.$broadcast('loading:hide')
        return response
      }
    }
  })
})

.run(function($rootScope, $ionicLoading) {
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: '<ion-spinner class="spinner-calm"></ion-spinner>'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

 
/* // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('app/components/login/loginView.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	  
    console.log('Doing login', $scope.loginData);
	console.log('username ', $scope.loginData.username);
	console.log('password ', $scope.loginData.password);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };*/
})

.controller('HomeCtrl', function($scope,$location, $ionicViewService) {
    
    console.log( 'Inside Home Ctrl');
    
	if(window.localStorage.getItem("data.username") === "undefined" || window.localStorage.getItem("data.username") === null) {
        $ionicViewService.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        $location.path("app/login");
    }
    $scope.status = "Making it this far means you are signed in";
    
    
    $scope.$on("$ionicView.afterEnter", function(event, data){
         console.log( 'Inside Home Ctrl On Event');
        $scope.listView = false;
  });
    
//    $scope.showList = function (catId) {
//        console.log( 'Inside Home showList');
//        //$scope.items = booklist.getList(catId);
//        // alert (JSON.stringify($scope.items));
//        $scope.listView = true;
//    };
    
    
    $scope.showNotification= function () {
          $location.path("app/notification");
    };
  
    
    $scope.showHome = function () {
        console.log( 'Inside Home showHome');
        $scope.listView = false;
    };
  
    $scope.showCollect = function () {
        $location.path("app/submit");
    };
    
    $scope.showReport = function () {
         $location.path("app/report");
    };
    
    $scope.showGraph= function () {
       $location.path("app/graph");
    };
    
    $scope.showDashboard = function () {
         $location.path("app/dash");
    };
    
    $scope.showHelp = function () {
         $location.path("app/help");
    };
    
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

//
      
});
