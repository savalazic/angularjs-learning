(function() {
  'use strict';

  angular.module('app.admin')
    .controller('Admin', Admin);

  Admin.$inject  = ['logger', 'dataservice'];

  /* @ngInject */
  function Admin(logger, dataservice) {
    /*jshint validthis: true */
    var vm = this;

    vm.title = 'Admin';
    vm.peoples = [];

    activate();

    function activate() {
      logger.info('Activated Admin View');
      dataservice.getPeople().then((data) => {
        vm.peoples = data;
      });
    }
  }
})();
