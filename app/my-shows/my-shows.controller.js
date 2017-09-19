(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('MyShowsController', MyShowsController)

    function MyShowsController($http) {
      const vm = this;

      vm.$onInit = function () {
        $http.get('http://localhost:3000/api/shows')
          .then(function (response) {
            vm.shows = response.data
            console.log(response.data);
        })
      }
    }
}());
