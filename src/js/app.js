angular
  .module('plateAuction', ['ngResource', 'satellizer', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'smart-table'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth)
  .controller('LoginCtrl', LoginCtrl);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;
}

LoginCtrl.$inject = ['$auth'];
function LoginCtrl($auth) {
  const vm = this;

  function register() {
    $auth.signup(vm.user)
      .then(user => console.log(user));
  }

  vm.register = register;

  function login() {
    // console.log('clkicked');
    $auth.login(vm.credentials)
      .then(user => console.log(user));
  }

  vm.login = login;
}
