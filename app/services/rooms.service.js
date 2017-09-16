(function() {
  'use strict';

  angular
    .module('jokeE')
    .factory('roomsService', roomsService)

    function roomsService($http) {
      const vm = this;
      
      let rooms = [
        $http({
          method: 'GET',
          url: 'http://localhost:3000/api/rooms'
        }).then(function (response) {
          vm.rooms = response.data
          console.log(response.data);
        })
      ]
      return {
        rooms
      }
    }
}());
