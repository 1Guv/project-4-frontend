angular
 .module('plateAuction')
 .controller('UsersProfileCtrl', UsersProfileCtrl)
 .controller('UsersEditCtrl', UsersEditCtrl);

UsersProfileCtrl.$inject = ['User', '$stateParams', '$state', '$auth'];
function UsersProfileCtrl(User, $stateParams, $state, $auth) {

  const vm = this;
  const payload = $auth.getPayload();
  const current_user = payload;



  vm.user = User.get($stateParams);

  function checkUser() {
    console.log('vm.user.id', vm.user.id);
    console.log('current_user.id', current_user.id);
    if (vm.user.id === current_user.id) {
      return true;
    }
  }
  // const vm = this;
  //
  // vm.user = User.get($stateParams);

  // function usersDelete() {
  //   vm.user
  //   .$remove()
  //   .then(() => $state.go('usersIndex'));
  // }
  //
  // vm.delete = usersDelete;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    vm.user
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
  }

  vm.update = usersUpdate;
}
