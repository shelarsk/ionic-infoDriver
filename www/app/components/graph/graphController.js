angular.module('starter.controllers')

.controller('GraphController', function($scope) {

    //alert('hi');
$scope.vmoptions1 = {  
  chart: {
    type: 'pieChart',
    height: 500,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: false,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    width: 320,
    title: 'Month Wise Breakup',
    donut: true,
    tooltips: false,
    legend: {
      margin: {
        top: 5,
        right: 0,
        bottom: 5,
        left: 0
      }
    }
  }
};

$scope.vmoptions2 = {  
  chart: {
    type: 'pieChart',
	title: 'Month Wise Breakup',
    height: 500,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: true,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    legend: {
      margin: {
        top: 5,
        right: 35,
        bottom: 5,
        left: 0
      }
    }
  }
};



$scope.vmdata1 = [  
  {
    key: 'Jan2016',
    y: 300
  },
  {
    key: 'Feb2016',
    y: 320
  },
  {
    key: 'Mar2016',
    y: 280
  },
  {
    key: 'Apr2016',
    y: 250
  }
];

$scope.vmdata2 = [  
  {
    key: '411041-Baner',
    y: 300
  },
  {
    key: '411042-Aundh',
    y: 320
  },
  {
    key: '411043-ShivajiNagar',
    y: 280
  },
  {
    key: '411044-Camp Road',
    y: 250
  }
];

    var stars = {  
  "Angular" : [18567 , 44913],
  "Backbone" : [16651 , 23633],
  "Ember" : [9023 , 15249],
  "Flight" : [4655 , 6380],
  "Knockout" : [4487 , 6990],
  "Marionette" : [4261 , 6629],
  "React" : [3691 , 32656]
};
   
    
    $scope.vmdata3 = [  
  {
    "key": "As of Jan '14",
    "color": "#1f77b4",
    "values": [
       { 
         "label" : "Dengue" , 
         "value" : stars.Angular[0] 
       },
       { 
         "label" : "Maleria" , 
         "value" : stars.Backbone[0] 
       },
       { 
         "label" : "H1N1" , 
         "value" : stars.Ember[0] 
       },
       { 
         "label" : "CCTRB" , 
         "value" : stars.Flight[0] 
       },
       { 
         "label" : "Catract" , 
         "value" : stars.Knockout[0] 
       },
       { 
         "label" : "Fever" , 
         "value" : stars.Marionette[0] 
       },
       { 
         "label" : "WSDDRT" , 
         "value" : stars.React[0] 
       }
    ]
  },
  {
    "key": "As of Dec '15",
    "color": "#2b93db",
    "values": [
       { 
         "label" : "Dengue" , 
         "value" : stars.Angular[1] - stars.Angular[0] 
       },
       { 
         "label" : "Maleria" , 
         "value" : stars.Backbone[1] - stars.Backbone[0] 
       },
       { 
         "label" : "H1N1" , 
         "value" : stars.Ember[1] - stars.Ember[0] 
       },
       { 
         "label" : "CCTRB" , 
         "value" : stars.Flight[1] - stars.Flight[0] 
       },
       { 
         "label" : "Catract" , 
         "value" : stars.Knockout[1] - stars.Knockout[0] 
       },
       { 
         "label" : "Fever" , 
         "value" : stars.Marionette[1] - stars.Marionette[0] 
       },
       { 
         "label" : "WSDDRT" , 
         "value" : stars.React[1] - stars.React[0] 
       }
    ]
  }
];
   
$scope.vmoptions3 = {  
  chart: {
    type: 'multiBarHorizontalChart',
    height: 450,
    x: function(d){return d.label;},
    y: function(d){return d.value;},
    showControls: false,
    showValues: true,
    duration: 500,
    stacked: true,
    xAxis: {
      showMaxMin: false
    },
    yAxis: {
      axisLabel: 'GitHub Stars',
      tickFormat: function(d) {
        return d3.format(',.2f')(d);
      }
    }
  }
};
            
  //  alert(JSON.stringify($scope.vmoptions1));

});