angular.module('reddit', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/404');
$stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/',
        template: "<my-layout></my-layout>"
    })
    .state('404', {
      url: '/404',
      template: "<h1>You must be lost or something.</h1>"
      
    })

  })
