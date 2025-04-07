var app = angular.module('userApp', []);

app.controller('UserController', function($scope) {
  $scope.users = [
    { name: 'John Doe', email: 'john@example.com', active: true },
    { name: 'Jane Smith', email: 'jane@example.com', active: false }
  ];

  $scope.newUser = {};
  $scope.sortType = 'name';
  $scope.isDark = false;

  $scope.addUser = function() {
    if ($scope.newUser.name && $scope.newUser.email) {
      $scope.newUser.active = true; // default new users to active
      $scope.users.push($scope.newUser);
      $scope.newUser = {};
    }
  };

  $scope.deleteUser = function(index) {
    $scope.users.splice(index, 1);
  };

  $scope.toggleTheme = function() {
    $scope.isDark = !$scope.isDark;
  };
});