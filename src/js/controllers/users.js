angular
 .module('plateAuction')
 .controller('UsersProfileCtrl', UsersProfileCtrl)
 .controller('UsersEditCtrl', UsersEditCtrl);

// UsersProfileCtrl.$inject = ['User'];
// function UsersCtrl(User) {
//   const vm = this;
//
//   vm.all = User.query();
//   // console.log(vm.all);
// }

UsersProfileCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersProfileCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
    .$remove()
    .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;
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
