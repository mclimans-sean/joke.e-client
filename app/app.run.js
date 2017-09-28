(function() {
  'use strict';

  angular
    .module('jokeE')
    .run(function ($rootScope, $state, AuthFactory) {

      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !AuthFactory.isLoggedIn()) {
          $state.transitionTo('login');
          event.preventDefault()
        }
      })
    })
    
}());
