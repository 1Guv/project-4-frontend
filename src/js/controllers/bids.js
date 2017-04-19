angular
 .module('plateAuction')
 .controller('BidsCtrl', BidsCtrl);

BidsCtrl.$inject = ['Bid'];
function BidsCtrl(Bid) {
  const vm = this;

  vm.all = Bid.query();
  console.log(vm.all);
}
