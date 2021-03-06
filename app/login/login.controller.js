(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('LoginController', LoginController)

    function LoginController($http, $state, $location, $window, AuthFactory, jwtHelper) {
      const vm = this;

      vm.isLoggedIn = function () {
        if (AuthFactory.isLoggedIn) {
          return true;
        } else {
          return false;
        }
      }

      vm.login = function () {
        if (vm.email && vm.password) {
          var user = {
            email: vm.email,
            password: vm.password
          }
          $http.post('http://localhost:3000/api/users/login', user).then(function (response) {
            console.log(response);
            if (response.data.success) {
              $window.sessionStorage.token = response.data.token;
              AuthFactory.isLoggedIn = true;
              var token = $window.sessionStorage.token;
              var decodedToken = jwtHelper.decodeToken(token);
              vm.loggedInUser = decodedToken.name;
              $state.go('home')
            }
          }).catch(function (error) {
            console.log(error);
          })
        }
      }

      vm.logout = function () {
        AuthFactory.isLoggedIn = false;
        delete $window.sessionStorage.token;
        // $location.path('/login')
        $state.go('home')
      }

      vm.isActiveTab = function (url) {
        var currentPath = $location.path().split('/')[1];
        return (url === currentPath ? 'active' : '')
      }


    }
}());
