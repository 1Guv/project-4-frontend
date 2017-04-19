angular
  .module('plateAuction')
  .controller('PlatesCtrl', PlatesCtrl);

PlatesCtrl.$inject = ['Plate', '$stateParams'];
function PlatesCtrl(Plate, $stateParams) {
  const vm = this;
  // vm.awesome = "Guv";

  Plate.query($stateParams, (data)=>{
      vm.plate = data;
      console.log(vm.plate);
    });

}
