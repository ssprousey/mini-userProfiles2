angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers().then(function(response) {
      console.log(1111111111, response);

      $scope.users = response.data.data;
    });
  }


  $scope.getUsers();

  

});
