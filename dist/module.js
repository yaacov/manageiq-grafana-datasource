'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var ManageIQDatasource, ManageIQDatasourceQueryCtrl, ManageIQConfigCtrl, ManageIQQueryOptionsCtrl, ManageIQAnnotationsQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      ManageIQDatasource = _datasource.ManageIQDatasource;
    }, function (_query_ctrl) {
      ManageIQDatasourceQueryCtrl = _query_ctrl.ManageIQDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', ManageIQConfigCtrl = function ManageIQConfigCtrl() {
        _classCallCheck(this, ManageIQConfigCtrl);
      });

      ManageIQConfigCtrl.templateUrl = 'partials/config.html';

      _export('QueryOptionsCtrl', ManageIQQueryOptionsCtrl = function ManageIQQueryOptionsCtrl() {
        _classCallCheck(this, ManageIQQueryOptionsCtrl);
      });

      ManageIQQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('AnnotationsQueryCtrl', ManageIQAnnotationsQueryCtrl = function ManageIQAnnotationsQueryCtrl() {
        _classCallCheck(this, ManageIQAnnotationsQueryCtrl);
      });

      ManageIQAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

      _export('Datasource', ManageIQDatasource);

      _export('QueryCtrl', ManageIQDatasourceQueryCtrl);

      _export('ConfigCtrl', ManageIQConfigCtrl);

      _export('QueryOptionsCtrl', ManageIQQueryOptionsCtrl);

      _export('AnnotationsQueryCtrl', ManageIQAnnotationsQueryCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
