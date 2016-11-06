var bankEndPoints = require('./bank-endpoints');
var refDataEndPoints = require('./refdata-endpoints');
var bankGroupUserEndPoints = require('./bankgroupuser-endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
    };

apiEndpoints.routes = refDataEndPoints
    .concat(bankEndPoints)
    .concat(bankGroupUserEndPoints);

module.exports = apiEndpoints;
