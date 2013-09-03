(function () {
  'use strict';
	var gbq = require('../gbq');
  exports.index = function (req, res) {
    gbq.getTest();
    res.render('index', { title: 'Express' });
  };
})();