(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('profileEditController', profileEditController)

    function profileEditController($http) {
      const vm = this;

      vm.save = function () {
        $http({
          method: 'PUT',
          url: 'http://localhost:3000/api/users/' + $stateParams.id,
          data: {
            bio: vm.user.bio,
            video_url: vm.user.video_url
          }
        })
      }
    }
}());
