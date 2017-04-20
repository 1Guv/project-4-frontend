angular
  .module('plateAuction')
  .controller('PlatesCtrl', PlatesCtrl)
  .controller('PlatesShowCtrl', PlatesShowCtrl)
  .controller('PlatesNewCtrl', PlatesNewCtrl);

PlatesCtrl.$inject = ['Plate', '$stateParams'];
function PlatesCtrl(Plate, $stateParams) {
  const vm = this;
  // vm.awesome = "Guv";

  Plate.query($stateParams, (data)=>{
      vm.plate = data;
      // console.log(vm.plate);
    });

}

PlatesShowCtrl.$inject = ['Plate', 'Bid', '$stateParams'];
function PlatesShowCtrl(Plate, Bid, $stateParams) {
  const vm = this;
  vm.bid = {};
  vm.addBid = addBid;

  Plate.get($stateParams, (data)=>{
      vm.plate = data;
      console.log(vm.plate);
    });

    //--------bid function here
  function addBid() {
    vm.bid.plate_id = vm.plate.id;
    Bid
      .save({bid: vm.bid})
      .$promise
      .then((bid) => {
        console.log(bid);
      });
  }

}

PlatesNewCtrl.$inject = ['Plate', '$state']
function PlatesNewCtrl(Plate, $state) {
  const vm = this;

  function create() {
    Plate.save({ plate: vm.new })
      .$promise
      .then(() => $state.go('platesIndex'));
  }

  vm.create = create;
}
