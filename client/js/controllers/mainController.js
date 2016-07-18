// MainController
(() => {
  angular
    .module('myApp')
    .controller('mainController', mainController);

  function mainController($scope, Image) {
    console.log('mainCtrl!');
    const vm = $scope; // viewmodel capture controllerAs with vm Y032
  }
})();
