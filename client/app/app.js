angular.module('reddit', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/');
$stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/',
        template: "<my-layout></my-layout>"  //"<my-layout></my-layout>"
    })

    // nested list with custom controller
    // .state('home.list', {
    //     url: '/list',
    //     templateUrl: 'partial-home-list.html',
    //     controller: function($scope) {
    //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    //     }
    // })
    //
    // // nested list with just some random string data
    // .state('home.paragraph', {
    //     url: '/paragraph',
    //     template: 'I could sure use a drink right now.'
    // })
  })
