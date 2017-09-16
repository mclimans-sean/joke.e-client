(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('homeController', homeController)

    function homeController($http) {
      const vm = this;

      vm.time = new Date()

      vm.$onInit = function () {
        $http.get('http://localhost:3000/api/shows').then(function (response) {
          vm.shows = response.data
          console.log(response.data);
        })
      }
    }
}());
