(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('postShowController', postShowController)

    function postShowController($http, roomsService) {
      const vm = this;

      vm.service = roomsService;

      vm.$onInit = function () {
        vm.options = roomsService.options
      }

      vm.createShow = function (post, show) {
        $http({
          method: 'POST',
          url: 'http://localhost:3000/api/shows',
          data: {
            name: vm.show.name,
            date: vm.show.date,
            time: vm.show.time,
            description: vm.show.description,
            room_id: vm.show.room_id,
            is_clean: vm.show.is_clean
          }
        }).then(function (response) {
          vm.show = response.data
          console.log(response.data);
        })
      }
    }
}());
