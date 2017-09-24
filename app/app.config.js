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
          resolve: {
            $title: function () {
              return 'Home';
            }
          }
        })
        .state('login', {
          url: '/login',
          component: 'login',
          data : { pageTitle: 'Login' }
        })
        .state('my-shows', {
          url: '/my-shows',
          component: 'myShows',
          resolve: {
            $title: function () {
              return 'Schedule';
            }
          }
        })
        .state('post-show', {
          title: 'New Show',
          url: '/new-show',
          component: 'postShow'
        })
        .state('post-room', {
          url: '/new-room',
          component: 'postRoom'
        })
        .state('show', {
          title: 'Show',
          url: '/shows/:id',
          component: 'show'
        })
        .state('users', {
          title: 'Comedians',
          url: '/users',
          component: 'users'
        })
        .state('user', {
          title: 'Comedian Profile',
          url: '/users/:id',
          component: 'oneUser'
        })


      $urlServiceProvider.rules.otherwise({state: 'home'})

    }
}());
