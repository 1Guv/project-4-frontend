angular
  .module('plateAuction')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;

  vm.isNavCollapsed = true;
  vm.isAuthenticated = $auth.isAuthenticated;

  vm.currentUser = null;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
    if($auth.getPayload() && !vm.currentUser) vm.currentUser = $auth.getPayload();
  });

  // const protectedStates = ['eventsNew', 'eventsEdit'];
  const protectedStates = [];

  $rootScope.$on('$stateChangeStart', (e, toState) => {
    // if($auth.isAuthenticated()) {
    //   vm.currentUserId = $auth.getPayload().id;
    // }

    if((!$auth.isAuthenticated() && protectedStates.includes(toState.name))) {
      e.preventDefault();
      $state.go('login');
      vm.message = 'You must be logged in to access this page.';
    }
    vm.pageName = toState.name;
  });

  function logout() {
    $auth.logout();
    vm.currentUser = null;
    $state.go('home');
  }

  vm.logout = logout;


  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }

  vm.toggleFunction = toggleFunction;

}
