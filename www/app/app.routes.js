angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/components/menu/menuView.html',
	controller: 'AppCtrl'
  })

	

	
	.state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/components/home/homeView.html',
          controller: 'HomeCtrl'
        }
      }
    })
	
	
 
	
	
	
	.state('app.aboutApp', {
      url: '/aboutApp',
      views: {
        'menuContent': {
		  templateUrl: 'app/components/about/aboutApp.html',
          controller: 'AboutAppCtrl'
        }
      }
    })	
	
	 .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'app/components/login/loginView.html',
          controller: 'LoginCtrl'
        }
      }
    })
  
  
    .state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: 'app/components/login/logoutView.html',
          controller: 'LogoutCtrl'
        }
      }
    })
	
	.state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'app/components/register/registerView.html',
          controller: 'RegisterCtrl'
        }
      }
    })
	
	
	.state('app.help', {
      url: '/help',
      views: {
        'menuContent': {
          templateUrl: 'app/components/help/helpView.html',
          controller: 'HelpCtrl'
        }
      }
    })
	
	

	
	.state('app.showCountries', {
      url: '/showCountries',
      views: {
        'menuContent': {
          templateUrl: 'app/components/country/country-list.html',
          controller: 'CountryListCtrl'
        }
      }
    })
	
	.state('app.countyDetail', {
      url: '/countyDetail/:countryId',
	  views: {
		'menuContent':{
			templateUrl: 'app/components/country/country-detail.html',
		    controller: 'CountryDetailCtrl'
		}
		  
	  }
    })
  
  
    .state('app.dash', {
      url: '/dash',
      views: {
        'menuContent': {
          templateUrl: 'app/components/dash/dashView.html',
          controller: 'DashCtrl'
        }
      }
    })
  
  .state('app.report', {
    url: '/report',
    views: {
      'menuContent': {
        templateUrl: 'app/components/report/reportView.html'
      }
    }
  })

  .state('app.notification', {
    url: '/notification',
    views: {
      'menuContent': {
        templateUrl: 'app/components/notification/notificationView.html',
         controller: 'notficationController'
      }
    }
  })
  
    .state('app.collect', {
    url: '/collect',
    views: {
      'menuContent': {
        templateUrl: 'app/components/collect/collectView.html'
      }
    }
  })
  
  .state('app.graph', {
      url: '/graph',
      views: {
        'menuContent': {
          templateUrl: 'app/components/graph/graphView.html',
		  controller: 'GraphController'
        }
      }
    })
  
  .state('app.submit', {
      url: '/submit',
      views: {
        'menuContent': {
          templateUrl: 'app/components/submit/submitView.html',
		  controller: 'submitController'
        }
      }
    })
  
	.state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'app/components/home/templates/playlist.html',
        //controller: 'PlaylistCtrl'
      }
    }
  });
  
 /* $routeProvider.
    when('/', {
      templateUrl:'app/components/country/country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'app/components/country/country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  */
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});