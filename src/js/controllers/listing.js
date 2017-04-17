angular
  .module('plateAuction', [])
  .controller('ListingCtrl', ListingCtrl);

ListingCtrl.$inject = [];
function ListingCtrl() {
  const vm = this;
  vm.awesome = "Guv";

  // $.get("http://localhost:3000/api/users").done(function(res){
  //     console.log(res);
  //   });


}
