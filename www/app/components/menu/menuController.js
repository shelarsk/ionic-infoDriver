angular.module('starter.controllers')



//Sliding menu controller
.controller('MenuCtrl', function($scope,DataService) {
	

    
 //$scope.categories = booklist.all();
    
    
    $scope.groups = [

       {key:0,name:"Graphs", items:[], show:false},
       {key:1,name:"Reports", items:[], show:false},
       {key:2,name:"Admin Control", items:[], show:false}
      ];

    $scope.groups[0].items.push({key:01,subName:'User Graphs',url:'#/app/graph'});
    $scope.groups[0].items.push({key:02,subName:'Admin Graphs',url:'#/app/graph'});
    
 
    $scope.groups[1].items.push({key:11,subName:'User Reports',url:'#/app/report'});
    $scope.groups[1].items.push({key:11,subName:'Admin Reports',url:'#/app/report'});
    
     $scope.groups[2].items.push({key:21,subName:'Tracker',url:'#/app/report'});
    $scope.groups[2].items.push({key:21,subName:'Insights',url:'#/app/report'});
    
    
    
    $scope.toggleGroup = function(group) {
    group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
    return group.show;
    };
	
	
	$scope.getBooklist= function(selCategory,selSubCategory){
		alert("Inside getBookList : " + selSubCategory.url);
		alert("Category :" + selCategory.key+ "=>" + selCategory.name);
		alert("Category :" + selSubCategory.key+ "=>" + selSubCategory.subName);
		var url  = selSubCategory.url +"/:" + selSubCategory.subName;
		alert("href = "+ url);
		
	};

  
});