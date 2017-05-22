(function() {
  'use strict';

  angular
    .module('gabrielMasclefPracticalTesting')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($moment) {
    var vm = this;

    vm.currentDate = $moment().format("DD-MM-YYYY");

  }
})();
