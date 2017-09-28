(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('RegisterController', RegisterController)

    function RegisterController($http) {
      const vm = this;

      vm.register = function (post, user) {

        var user = {
          name: vm.name,
          facebook_id: vm.facebook_id,
          email: vm.email,
          password: vm.password,
          confirmPassword: vm.confirmPassword
        }

        if (!vm.name || !vm.facebook_id || !vm.email || !vm.password) {
          vm.error = "Please complete all fields in the registration form"
        } else {
          if (vm.password !== vm.confirmPassword) {
            vm.error = "Please make sure the passwords match"
          } else {
            $http.post('http://localhost:3000/api/users/register', user).then(function (result) {
              console.log(result);
              vm.message = 'Successful registration, please login';
              vm.error = ''
            }).catch(function (error) {
              console.log(error);
            })

          }
        }
      }
    }
}());
