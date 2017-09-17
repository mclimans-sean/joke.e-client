(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('showController', showController)

    function showController($stateParams, $http) {
      const vm = this;

      vm.$onInit = function () {

        $http.get('http://localhost:3000/api/shows/' + $stateParams._id)
          .then(function (response) {
            vm.shows = response.data
            console.log(response.data);
          })
      }
    }
}());
