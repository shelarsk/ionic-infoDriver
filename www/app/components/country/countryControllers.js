var appControllers = angular.module('starter.controllers')


appControllers.controller('CountryListCtrl', function ($scope, $http){
  $http.get('app/components/country/countries.json').success (function(data){
    $scope.countries = data;
	console.log($scope.countries);
  });
});

appControllers.controller('CountryDetailCtrl', function ($scope, $stateParams){
  alert("Inside country detail");
  alert(JSON.stringify($stateParams.countryId));
  console.log($stateParams.countryId);
  console.log('Country Name:'+$stateParams.countryId.name);
  $scope.selCountry = $stateParams.countryId.name;
  
});