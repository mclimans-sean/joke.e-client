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
          authenticate: false,
          data: {
            pageTitle: 'Home'
          }
        })
        .state('register', {
          url: '/register',
          component: 'register',
          authenticate: false,
          data: {
            pageTitle: 'Register'
          }
        })
        .state('login', {
          url: '/login',
          component: 'login',
          authenticate: false,
          data : {
            pageTitle: 'Login'
          }
        })
        .state('my-shows', {
          url: '/my-shows',
          component: 'myShows',
          authenticate: true,
          data: {
            pageTitle: 'Schedule'
          }
        })
        .state('post-show', {
          url: '/new-show',
          component: 'postShow',
          authenticate: true,
        })
        .state('post-room', {
          url: '/new-room',
          component: 'postRoom',
          authenticate: true,
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
          url: '/users/:id',
          component: 'oneUser',
          authenticate: true
        })


      $urlServiceProvider.rules.otherwise({state: 'login'})

    }
}());
