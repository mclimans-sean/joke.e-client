(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('LoginController', LoginController)

    function LoginController($http) {
      const vm = this;

      vm.login = function (post, user) {

        $http({
          method: 'POST',
          url: 'http://localhost:3000/api/auth/login',
          data: {
            email: vm.user.email,
            password: vm.user.password
          }
        })
      }

      // vm.$onInit = function () {
      //   $httpProvider.interceptors.push(function($q, $location) {
      //     return {
      //       response: function(response) {
      //         // do something on success
      //         return response;
      //       },
      //       responseError: function(response) {
      //         if (response.status === 401)
      //           $location.url('/login');
      //         return $q.reject(response);
      //       }
      //     };
      //   });
      // }
    }
}());
