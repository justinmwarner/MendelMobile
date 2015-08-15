angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
  console.log("juwar 1");
    cordova.plugins.barcodeScanner.scan(
      function (result) {
  console.log("juwar 2");
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
  console.log("juwar 3");
          alert("Scanning failed: " + error);
      }
   );
  };
  console.log("juwar 4");
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log("juwar 6");
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  console.log("juwar 5");
  $scope.settings = {
    enableFriends: true
  };
});
