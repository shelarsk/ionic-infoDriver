angular.module('starter.controllers')

.controller('submitController', function($scope,areas,$http,$ionicPopup) {

    //alert('hi inside submission');
    
   // $scope.items = areas.all();
    
   // alert(JSON.stringify($scope.items));
    
       
        $scope.$on("$ionicView.afterEnter", function(event, data){
         $http.jsonp('http://192.168.43.74:8080/SpringMVC4Web/getJsonFormList.do?callback=JSON_CALLBACK',{ cache: false})
	    .success(function(json) {
			console.log(json.found);
          $scope.items = json;
        alert(JSON.stringify($scope.items));
        // notification.set($scope.items);
    }). 
        error(function(json) {
        alert(JSON.stringify("hi"));
         var alertPopup = $ionicPopup.alert({
                title: 'Internet Check',
                template: 'Check your Internet Connection.'
            });
    });
  });
    
    
    
});