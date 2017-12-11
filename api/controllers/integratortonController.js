var Client = require('node-rest-client').Client;
var path = require('path');
var config = require("config");

var insightsAPIKey  = config.get('MasterAccount.insightsQueryKey');
var accountNumber   = config.get('MasterAccount.accountId');

var client = new Client();

var argsRaw = {
    parameters: { nrql: "SELECT duration, pageRenderingDuration, backendDuration from PageView since 1 day ago limit 100"},
    headers: { "X-Query-Key": insightsAPIKey }
};

var argsAvg = {
    parameters: { nrql: "SELECT average(duration), average(dnsLookupDuration), average(domProcessingDuration), average(backendDuration) from PageView timeseries since 1 day ago"}, // this is serialized as URL parameters
    headers: { "X-Query-Key": insightsAPIKey }
};

exports.listAllRaw = function(req, res) {
  console.log('listAllRaw');
  client.get("https://insights-api.newrelic.com/v1/accounts/" + accountNumber + "/query", argsRaw, function (data, response) {
      // Return Data
      res.send(data);
  });
};

exports.listAllAvg = function(req, res) {
  console.log('listAllAvg');
  client.get("https://insights-api.newrelic.com/v1/accounts/" + accountNumber + "/query", argsAvg, function (data, response) {
      // Return Data
      res.send(data);
  });
};

exports.postAll = function(req, res) {
  console.log('postAll');
};

exports.get = function(req, res) {
  console.log('get');
};

exports.delete = function(req, res) {
  console.log('delete');
};

exports.put = function(req, res) {
  console.log('put');
};
