(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('usersController', usersController)

    function usersController($http) {
      const vm = this;

      vm.$onInit = function () {
        $http.get('http://localhost:3000/api/users')
          .then(function (response) {
            vm.users = response.data

        })
      }
    }
}());
