angular
 .module('plateAuction')
 .factory('Plate', Plate);

Plate.$inject = ['$resource','API_URL'];
function Plate($resource, API_URL) {
  const vm = this;

  return new $resource(`${API_URL}/plates/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });


}
