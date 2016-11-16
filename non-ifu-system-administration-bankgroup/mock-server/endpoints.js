var bgaBankgroupUserProfileEndpoints = require('./bga-bankgroup-user-profile-endpoints');
var bgaBankProfileEndpoints = require('./bga-bank-profile-endpoints');
var bgaBankUserProfileEndpoints = require('./bga-bank-user-profile-endpoints');
var bgaCustomerProfileEndpoints = require('./bga-customer-profile-endpoints');
var bgaCustomerUserProfileEndpoints = require('./bga-customer-user-profile-endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
};

apiEndpoints.routes = bgaBankgroupUserProfileEndpoints
                        .concat(bgaBankProfileEndpoints)
                        .concat(bgaBankUserProfileEndpoints)
                        .concat(bgaCustomerProfileEndpoints)
                        .concat(bgaCustomerUserProfileEndpoints);

module.exports = apiEndpoints;
