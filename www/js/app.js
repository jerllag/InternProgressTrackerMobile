angular.module('starter', ['ionic', 'starter.controllers'])

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
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		/*.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
		})*/

		.state('login', {
			url: '/',
			templateUrl: 'template/login.html',
			controller: 'LogInCtrl'
		})

		.state('signup', {
			url: '/signup',
			templateUrl: 'template/signup.html'
		})
		
		.state('leaderboard', {
		  url: '/leaderboard',
		  templateUrl: 'template/browse.html'
		})

		.state('app.single', {
		url: '/playlists/:playlistId',
		views: {
		  'menuContent': {
			templateUrl: 'templates/playlist.html',
			controller: 'PlaylistCtrl'
		  }
		}
		});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/');
});