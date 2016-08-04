angular.module('starter.controllers')




.controller('LoginCtrl', function($scope,$state, $location,$ionicHistory,$http,$ionicPopup,$ionicLoading,$timeout) {
   
        $scope.login = function(username,password) {
        
        $ionicLoading.show();
            
       /* var strUrl = 'http://test.com/login.do&callback=JSON_CALLBACK&username=' + username + '&password=' + password;
        
     
        
        $http.jsonp( strUrl,{ cache: false})
	    .success(function(json) {
          $scope.params = json;
        
        if($scope.params.details === 'true' ) {
                // alert('Login Successful');
                window.localStorage.setItem("data.username", username);
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                $location.path("/home");
        } else {
            alert('Login Unsuccessful -' + $scope.params.msg);
			window.localStorage.setItem("data.username", username);
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                $location.path("/home");
        }
         
           
            }). 
                error(function(json,status,headers) {
                    console.log('status  ', status);
                    console.log('headers  ', headers);
                //alert(JSON.stringify(json));
                $ionicLoading.hide();
                 var alertPopup = $ionicPopup.alert({
                        title: 'Internet Check',
                        template: 'Check your Internet Connection.'
                    });
					
					$location.path("/home");
            });
        */
            $ionicLoading.hide(); 
            $location.path("/home");
                   
    } 
		$scope.goToRegister=function(){
				alert("Inside goToRegister");
				 $state.go('app.register');
				
		}

        
});




