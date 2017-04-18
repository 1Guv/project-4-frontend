angular
 .module('plateAuction')
 .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['User'];
function UsersCtrl(User) {
  const vm = this;

  vm.all = User.query();
  // console.log(vm.all);
}
