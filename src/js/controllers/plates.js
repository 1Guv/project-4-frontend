angular
  .module('plateAuction')
  .controller('PlatesIndexCtrl', PlatesIndexCtrl)
  .controller('PlatesShowCtrl', PlatesShowCtrl)
  .controller('PlatesNewCtrl', PlatesNewCtrl);

PlatesIndexCtrl.$inject = ['Plate', '$stateParams'];
function PlatesIndexCtrl(Plate, $stateParams) {
  const vm = this;
  // vm.awesome = "Guv";

  Plate.query($stateParams, (data)=>{
      vm.plate = data;
      // console.log(vm.plate);

    // Shows the days left for the item to finish
    function daysLeft() {
      vm.plate.forEach((plate) => {
        plate.dLeft = Math.floor(( Date.parse(plate.expiry_date) - Date.parse(plate.start_date)) / 86400000);
      });
    }
    daysLeft();
  });

  function callEveryHour() {
    setInterval(daysLeft(), 1000 * 60 * 60);
  }

  function filter(value, index, array) {
    const re = new RegExp((vm.query || '').replace(/ /g, ''), 'i');
    return value.plate.replace(/ /g, '').match(re) || value.meaning.replace(/ /g, '').match(re);
  }

  vm.filter = filter;

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

PlatesNewCtrl.$inject = ['Plate', '$state'];
function PlatesNewCtrl(Plate, $state) {
  const vm = this;

  function create() {
    Plate.save({ plate: vm.new })
      .$promise
      .then(() => $state.go('platesIndex'));
  }

  vm.create = create;
}
