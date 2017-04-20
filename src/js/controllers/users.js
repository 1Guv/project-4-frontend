angular
 .module('plateAuction')
 .controller('UsersProfileCtrl', UsersProfileCtrl)
 .controller('UsersNewCtrl', UsersNewCtrl)
 .controller('UsersEditCtrl', UsersEditCtrl);

UsersProfileCtrl.$inject = ['User', '$stateParams', '$state', '$auth', 'Plate'];
function UsersProfileCtrl(User, $stateParams, $state, $auth, Plate) {

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

  function create() {
    Plate.save(vm.plate, () => {
      $state.go('platesIndex');
    });
  }
  vm.create = create;

}

UsersNewCtrl.$inject = ['User', '$state'];
function UsersNewCtrl(User, $state) {
  const vm = this;
  vm.users = User.query();

  function usersCreate() {
    User
      .save({ users: vm.users })
      .$promise
      .then(() => $state.go('usersProfile'));
  }

  vm.create = usersCreate;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    vm.user
      .$update()
      .then(() => $state.go('usersProfile', $stateParams));
  }

  vm.update = usersUpdate;
}
