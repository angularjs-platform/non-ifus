var baBankUserProfileEndpoints = require('./ba-bank-user-profile-endpoints');
var baCustomerProfileEndpoints = require('./ba-customer-profile-endpoints');
var baCustomerUserProfileEndpoints = require('./ba-customer-user-profile-endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
};

apiEndpoints.routes = baBankUserProfileEndpoints
                        .concat(baCustomerProfileEndpoints)
                        .concat(baCustomerUserProfileEndpoints);

module.exports = apiEndpoints;
