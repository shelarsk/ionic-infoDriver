angular.module('starter.controllers')


.controller('notficationController', function($scope,notification,$location,$ionicViewService,$http,$ionicPopup) {
    $scope.listView = false;
    
    

    
        $scope.$on("$ionicView.afterEnter", function(event, data){
        $http.jsonp('http://192.168.43.74:8080/SpringMVC4Web/getJsonNoficationList.do?callback=JSON_CALLBACK',{ cache: false})
        
         //$http.jsonp('http://10.11.19.170:8080/SpringMVC4Web/getJsonNoficationList.do?callback=JSON_CALLBACK',{ cache: false})
	    .success(function(json) {
			console.log(json.found);
          $scope.items = json;
        alert(JSON.stringify($scope.items));
         notification.set($scope.items);
    }). 
        error(function(json) {
        alert(JSON.stringify("hi"));
         var alertPopup = $ionicPopup.alert({
                title: 'Internet Check',
                template: 'Check your Internet Connection.'
            });
    });
  });
    
   
    
    $scope.showList = function (catId) {
        console.log( 'Inside Home showList');
        $scope.itemDetails = notification.get(catId);
        
       // $scope.itemDetails = $scope.getRecord ($scope.items,catId)
       alert (JSON.stringify($scope.itemDetails));
         alert ($scope.itemDetails.detail);
        $scope.listView = true;
    };
    
    $scope.showListBack = function () {

        $scope.listView = false;
    };
    
   $scope.getRecord = function(shelf, chatId) {
       
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].id === parseInt(chatId)) {
          return shelf[i];
        }
      }
      return null;
    }
    
    
});

