angular
 .module('plateAuction')
 .factory('Bid', Bid);

Bid.$inject = ['$resource','API_URL'];
function Bid($resource, API_URL) {
  const vm = this;

  return new $resource(`${API_URL}/bids`, { id: '@id' }, {
    update: { method: 'PUT' }
  });


}
