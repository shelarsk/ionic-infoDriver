// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
  $ionicPlatform.registerBackButtonAction(function (event) {
	// alert("inside function ");
	 //alert("event "+event);
	  //alert("$state.current.name "+$state.current.name);
	 
    if($state.current.name=="app.home"){
		//alert("1111");
      navigator.app.exitApp();
    }
    else {
		//alert("2222");
      navigator.app.backHistory();
    }
  }, 100);
  
});


