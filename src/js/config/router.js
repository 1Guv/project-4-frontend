angular
  .module('plateAuction')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/index.html'
    })
    .state('usersProfile', {
      url: '/users/:id',
      templateUrl: 'js/views/users/profile.html',
      controller: 'UsersProfileCtrl as usersProfile'
    })
    .state('usersNew', {
      url: '/users/new',
      templateUrl: 'js/views/users/new.html',
      controller: 'UsersNewCtrl as userssNew'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    .state('platesIndex', {
      url: '/plates',
      templateUrl: 'js/views/plates/index.html',
      controller: 'PlatesCtrl as plates'
    })
    .state('platesNew', {
      url: '/plates/new',
      templateUrl: 'js/views/plates/new.html',
      controller: 'PlatesNewCtrl as platesNew'
    })
    .state('platesShow', {
      url: '/plates/:id',
      templateUrl: 'js/views/plates/show.html',
      controller: 'PlatesShowCtrl as platesShow'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'AuthCtrl as auth'
    });

  $urlRouterProvider.otherwise('/');
}
