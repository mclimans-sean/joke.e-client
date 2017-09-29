(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('oneUserController', oneUserController)

    function oneUserController($stateParams, $http) {
      const vm = this;

      vm.$onInit = function () {

        $http.get('http://localhost:3000/api/users/' + $stateParams.id)
          .then(function (response) {
            vm.user = response.data
            
          })
      }
    }
}());
