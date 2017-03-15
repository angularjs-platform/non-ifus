var CACustomerUserProfile = require('./user-maintenance/profile/endpoints');
var CACustomerUserAdvancedProfile = require('./user-maintenance/advanced-profile/endpoints');
var CACustomerRole = require('./role-maintenance/endpoints');
var CACustomerBranch = require('./branch-maintenance/endpoints');
var CACustomerBeneficiary = require('./beneficiary-maintenance/endpoints');
var CACustomerAccounts = require('./accounts-maintenance/endpoints');
var CACustomerAuthorization = require('./authorization-maintenance/endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
};

apiEndpoints.routes = CACustomerUserProfile
                        .concat(CACustomerUserAdvancedProfile)
                        .concat(CACustomerRole)
                        .concat(CACustomerBranch)
                        .concat(CACustomerBeneficiary)
                        .concat(CACustomerAccounts)
                        .concat(CACustomerAuthorization);

module.exports = apiEndpoints;
