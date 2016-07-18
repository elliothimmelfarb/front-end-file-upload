(() => {
  angular
    .module('myApp')
    .service('Image', Image);

  function Image() {
    this.currentUrl = '';
    this.upload = upload;

    function upload(image) {
      
    }
  }
})();
