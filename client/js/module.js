// MODULE //////////
(() => {
  angular
  .module('myApp', [
    'ui.router',
    'oitozero.ngSweetAlert',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ngFileUpload',
  ])
  .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
    })
    .state('upload', {
      url: '/upload',
      templateUrl: '/html/upload.html',
      controller: 'uploadController',
    });
    $urlRouterProvider.otherwise('/');
  }
})();
