angular.module('starter.controllers')



.controller('HelpCtrl', function($scope) {

	//alert("Hi");
	$scope.groups = [
		
		{key:0,iconUrl:"",name:"Installation Instructions",info:"How to use this",questions:[],answers:[],show:false},
		{key:1,name:"Usage Instructions",info:"How to use it.",questions:[],answers:[],show:false},
		{key:2,name:"In-App Purchases",info:"There is no In-App purchase.",questions:[],show:false},
		{key:3,name:"App/Content",info:"App Content Flow",questions:[],show:false},
    ];
	
	$scope.groups[0].questions.push({key:00,text:"1.‘How to download",ans:[]});
	$scope.groups[0].questions.push({key:01,text:"2.‘How to use",ans:[]});
	
	
	 
	$scope.groups[0].questions[0].ans=[{text:"Downlod on Google Playstore."}];
	$scope.groups[0].questions[1].ans=[{text:"Check user guide"}];
	
	
	
	  
    $scope.toggleGroup = function(group) {
    group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
    return group.show;
    };

   $scope.toggleSubGroup = function(item) {
   /* if ($scope.isSubGroupShown(item)) {
      $scope.shownChild = null;
    } else {
      $scope.shownChild = item;
    }*/
	item.show = !item.show;
    // $ionicScrollDelegate.resize();
   };

  
  $scope.isSubGroupShown = function(item) {
   // return $scope.shownChild == item;
   return item.show;
  };
   
});
