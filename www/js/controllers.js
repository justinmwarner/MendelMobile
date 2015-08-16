angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
    .controller('DashCtrl', function ($scope, $ionicTabsDelegate, userService) {
		$scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();


        $scope.goForward = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        }
		
		// Launch dialog for goto tower. TODO make it change tabs.
	   $scope.gotoTower = function() {
			 cordova.plugins.barcodeScanner.scan(
			  function (result) {
				  alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
						
						goForward();
			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
		   );
	   };
    })
    .controller('ChatsCtrl', function ($scope, $ionicTabsDelegate, userService) {
		$scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();
        
        $scope.goForward = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        }
    })
    .controller('AccountCtrl', function ($scope, $ionicTabsDelegate, userService) {
			$scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();
		// Barcode scan for setting tower #.
	   $scope.setLocation = function() {
			 cordova.plugins.barcodeScanner.scan(
			  function (result) {
				  alert("Location\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
					userService.SetLocation(result.text);
			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
		   );
	   };
		// Barcode scan for setting unit #.
	   $scope.setUnit = function() {
			 cordova.plugins.barcodeScanner.scan(
			  function (result) {
				  alert("Unit\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
					userService.SetUnit(result.text);
			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
		   );
	   };
        $scope.goForward = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function () {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        }
    })
;
