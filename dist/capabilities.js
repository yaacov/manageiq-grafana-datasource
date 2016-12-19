'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Capabilities;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Capabilities', Capabilities = function Capabilities(versionStr) {
        _classCallCheck(this, Capabilities);

        this.QUERY_POST_ENDPOINTS = true;
        this.QUERY_BY_TAGS = true;
        this.QUERY_STATS_POST_ENDPOINTS = true;
        var regExp = new RegExp('([0-9]+)\.([0-9]+)\.(.+)');
        if (versionStr.match(regExp)) {
          var versionInfo = regExp.exec(versionStr);
          var major = versionInfo[1];
          var minor = versionInfo[2];
          if (major == 0 && minor < 17) {
            this.QUERY_POST_ENDPOINTS = false;
          }
          if (major == 0 && minor < 20) {
            this.QUERY_STATS_POST_ENDPOINTS = false;
            this.QUERY_BY_TAGS = false;
          }
        }
      });

      _export('Capabilities', Capabilities);
    }
  };
});
//# sourceMappingURL=capabilities.js.map
