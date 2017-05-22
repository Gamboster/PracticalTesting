(function() {
  'use strict';

  angular
    .module('gabrielMasclefPracticalTesting')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
