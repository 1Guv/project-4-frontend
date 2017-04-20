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

    function daysLeft() {
      // get start date
      // console.log(vm.plate[0].start_date);

      vm.plate.forEach((plate) => {
        plate.dLeft = Math.floor(( Date.parse(plate.expiry_date) - Date.parse(plate.start_date)) / 86400000);
      });


      // var startDate = vm.plate[0].start_date;
      // // get end date
      // // console.log(vm.plate[0].expiry_date);
      // var expiryDate = vm.plate[0].expiry_date;
      // // store the difference in variable called dateLeft
      // vm.days = Math.floor(( Date.parse(expiryDate) - Date.parse(startDate)) / 86400000);
      // // maybe a counter so it shows seconds going down and the date and time reducing as appropriate
      // console.log(vm.days);
    }
    daysLeft();

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
