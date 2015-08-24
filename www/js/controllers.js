angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('LogInCtrl', function($scope, $http, $state) {
	//$cookieStore.put('hasUser', false);
	$scope.loginData = {};
	
	$scope.login = function() {
		$http({
		method: 'GET',
		url: 'http://192.168.1.102/internprogresstracker/js_php/studentCRU.php',
		params: {studno: $scope.loginData.studno, password: $scope.loginData.password}
		})
		.success(function(data) {
			/*$cookieStore.put('studno', data[0][0]);
			$cookieStore.put('fname', data[0][1]);
			$cookieStore.put('lname', data[0][2]);
			$cookieStore.put('email', data[0][3]);
			$cookieStore.put('password', data[0][4]);
			$cookieStore.put('hasUser', true);*/
			alert("success");
			$state.go("leaderboard");
			
		})
		.error(function(data) {
			alert("error");
		})
		;
	};
})

.controller('SignUpController', function($http, $scope, $location, $filter) {
	$scope.info = {};
	
	$scope.studSignUp = function () {
		var sdate = $filter('date')($scope.info.startdate, "yyyy-MM-dd");
		var edate = $filter('date')($scope.info.enddate, "yyyy-MM-dd");
		alert(edate);
		$http.post('http://192.168.1.102/internprogresstracker/js_php/studentCRU.php', {studno: $scope.info.studno, fname: $scope.info.fname, lname: $scope.info.lname, course: $scope.info.course,
											 college: $scope.info.college, contactno: $scope.info.contactno, email: $scope.info.email, password: $scope.info.password,
											 compname: $scope.info.compname, startdate: sdate, enddate: edate, hoursrequired: $scope.info.hoursrequired,
											 compadd: $scope.info.compadd, deptass: $scope.info.deptass, conperson: $scope.info.conperson,
											 cpcontactno: $scope.info.cpcontactno, cpemail: $scope.info.cpemail})
			.success(function(data) {
				alert("Sign up successful");
			})
			.error(function(data) {
				alert(data);
			});
	};
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
