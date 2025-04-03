var app = angular.module('myApp', []);

app.controller('UserController', function($scope) {
    $scope.users = [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' },
        { name: 'Charlie', email: 'charlie@example.com' }
    ];
});
