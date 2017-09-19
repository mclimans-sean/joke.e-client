(function() {
  'use strict';

  angular
    .module('jokeE')
    .controller('PostRoomController', PostRoomController)

    function PostRoomController($http) {
      const vm = this;

      vm.createRoom = function (post, room) {
        $http({
          method: 'POST',
          url: 'http://localhost:3000/api/rooms',
          data: {
            name: vm.room.name,
            address: vm.room.address,
            address_2: vm.room.address_2,
            city: vm.room.city,
            state: vm.room.state,
            zip: vm.room.zip
          }
        }).then(function (response) {
          vm.room = response.data
          console.log(response.data);
        })
      }
    }
}());
