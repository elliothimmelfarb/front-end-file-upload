
(() => {
  angular
    .module('myApp')
    .controller('uploadController', uploadController);

  function uploadController($scope, Upload) {
    const vm = $scope;
    vm.submit = submit;

    function submit() {
      console.log('submit');

      Upload.upload({
        url: '/api/files',
        data: { file: vm.file, name: 'HELI' },
      })
      .then(res => {
        console.log('res:', res);
      })
      .catch(err => {
        console.log(err);
      });
      console.log('file:', vm.file);
    }
  }
})();
