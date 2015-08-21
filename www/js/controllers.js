angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})
    .controller('DashCtrl', function($scope, $ionicTabsDelegate, userService) {
		var client = new WindowsAzure.MobileServiceClient(
			"https://mendelmobile.azurewebsites.net",
			"https://default-sql-westusf921732c9fe045958ccbb50b01aef1f9.azurewebsites.net",
			""
		);
		var todoItem = { 
			text: "Awesome item",
			complete: false
		};
		client.getTable("TodoItem").insert(todoItem);
		
        var buildingUnits = [
            ["All"],
            ["All", "Cultivator A", "Cultivator B", "Tower 1", "Tower 2", "Tower 3"],
            ["All", "Tower 1", "Tower 2", "Tower 3", "Tower 4"],
            ["All", "Cultivator 1", "Cultivator 2", "Cultivator 3"]
        ];
        $scope.building = $scope.unit = "All";
        $scope.buildings = ["All", "H", "34", "86"];
        $scope.units = ["All"]; // we'll get these later
        $scope.getBuildingUnits = function(newValue, oldValue) {
            // just some silly stuff to get the key of what was selected since we are using simple arrays.
            var key = $scope.buildings.indexOf(newValue);
            // Here you could actually go out and fetch the options for a server.
            var newUnits = buildingUnits[key];
            // Now set the options.
            // If you got the results from a server, this would go in the callback
            $scope.units = newUnits;
        };

        $scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();

        $scope.$on('$ionicView.enter', function() {

        });

        $scope.updateUnit = function() {
            // use $scope.selectedItem.code and $scope.selectedItem.name here
            // for other stuff ...
        }


        $scope.updateLocation = function() {
            // use $scope.selectedItem.code and $scope.selectedItem.name here
            // for other stuff ...

            // Update the Units to only this location's units.
        }

        $scope.goForward = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        }

        // Launch dialog for goto tower. TODO make it change tabs.
        $scope.gotoTower = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);

                    goForward();
                },
                function(error) {
                    alert("Scanning failed: " + error);
                }
            );
        };
    })
    .controller('ChatsCtrl', function($scope, $ionicTabsDelegate, userService, $ionicModal) {
        $scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();
		
		

        $scope.goForward = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        } 
			$ionicModal.fromTemplateUrl('templates/modal.html', function($ionicModal) {
				$scope.modal = $ionicModal;
			}, {
				// Use our scope for the scope of the modal to keep it simple
				scope: $scope,
				// The animation we want to use for the modal entrance
				animation: 'slide-in-up' 
			}); 
        dashboard3.render();
    })
    .controller('AccountCtrl', function($scope, $ionicTabsDelegate, userService) {
        $scope.title = "Building " + userService.GetLocation() + " Unit: " + userService.GetUnit();

        $scope.$on('$ionicView.enter', function() {
            console.log('$ionicView.enter called');
        });

        // Barcode scan for setting tower #.
        $scope.setLocation = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    alert("Location\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
                    userService.SetLocation(result.text);
                },
                function(error) {
                    alert("Scanning failed: " + error);
                }
            );
        };
        // Barcode scan for setting unit #.
        $scope.setUnit = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    alert("Unit\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
                    userService.SetUnit(result.text);
                },
                function(error) {
                    alert("Scanning failed: " + error);
                }
            );
        };
        $scope.goForward = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1) {
                $ionicTabsDelegate.select(selected + 1);
            }
        }

        $scope.goBack = function() {
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected != -1 && selected != 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        }
    });