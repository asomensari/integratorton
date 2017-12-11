'use strict';
module.exports = function(app) {
  var chart = require('../controllers/integratortonController');

  // Return Raw Metrics
  app.route('/getRawMetrics')
    .get(chart.listAllRaw);

  // Return Avg Metrics
  app.route('/getAvgMetrics')
    .get(chart.listAllAvg);

};
