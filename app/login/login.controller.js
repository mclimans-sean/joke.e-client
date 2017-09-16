(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('controller')

    function controller($http) {
      const vm = this;

      vm.$onInit = function () {
        $httpProvider.interceptors.push(function($q, $location) {
          return {
            response: function(response) {
              // do something on success
              return response;
            },
            responseError: function(response) {
              if (response.status === 401)
                $location.url('/login');
              return $q.reject(response);
            }
          };
        });
      }
    }
}());
