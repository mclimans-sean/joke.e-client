(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('RegisterController', RegisterController)

    function RegisterController($http) {
      const vm = this;

      vm.register = function (post, user) {

        $http({
          method: 'POST',
          url: 'http://localhost:3000/api/auth/register',
          data: {
            name: vm.user.name,
            facebook_id: vm.user.facebook_id,
            email: vm.user.email,
            password: vm.user.password,
            confirmPassword: vm.user.confirmPassword
          }
        })
      }
    }
}());
