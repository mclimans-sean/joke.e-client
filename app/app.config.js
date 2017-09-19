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
        .state('my-shows', {
          url: '/my-shows',
          component: 'myShows'
        })
        .state('post-show', {
          url: '/new-show',
          component: 'postShow'
        })
        .state('post-room', {
          url: '/new-room',
          component: 'postRoom'
        })
        .state('show', {
          url: '/shows/:id',
          component: 'show'
        })
        .state('users', {
          url: '/users',
          component: 'users'
        })
        .state('user', {
          url: '/users/:id',
          component: 'oneUser'
        })


      $urlServiceProvider.rules.otherwise({state: 'home'})
    }
}());
