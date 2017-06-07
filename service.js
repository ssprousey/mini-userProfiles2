angular.module('userProfiles').service('mainService', function($http) {


  this.getUsers = function() {
    return $http({
			method: 'GET',
			url: 'https://reqres.in/api/users?page=1'
		});
  }

// $http returns a promise!!! A promise is an object that has different methods on it, including .then//

	this.toggleFavorite = function (id) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].isFavorite = !data[i].isFavorite;
      }
    }
  }

});
