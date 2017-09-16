(function() {
  'use strict';

  angular
    .module('jokeE')
    .config(config)

    config.$inject = ['$stateProvider', '$urlServiceProvider', '$locationProvider']

    function config($stateProvider, $urlServiceProvider, $locationProvider){

      // this line is optional
      $locationProvider.html5Mode(true)

      $stateProvider
        .state('home', {
          url: '/home',
          component: 'home',
        })
        .state('login', {
          url: '/login',
          component: 'login'
        })
        .state('post-show', {
          url: '/new-show',
          component: 'postShow'
        })
        .state('post-room', {
          url: '/new-room',
          component: 'postRoom'
        })


      $urlServiceProvider.rules.otherwise({state: 'home'})
    }
}());
