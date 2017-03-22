var BABankRole = require('./role-maintenance/endpoints');
var BABankAuthorization = require('./authorization-maintenance/endpoints');
var BABankUser = require('./user-maintenance/endpoints');

var BACustomerProfile = require('./customer-maintenance/profile-maintenance/profile/endpoints');
var BACustomerAdvancedProfile = require('./customer-maintenance/profile-maintenance/advanced-profile/endpoints');
var BACustomerUserProfile = require('./customer-maintenance/user-maintenance/profile/endpoints');
var BACustomerUserAdvancedProfile = require('./customer-maintenance/user-maintenance/advanced-profile/endpoints');
var BACustomerBranch = require('./customer-maintenance/branch-maintenance/endpoints');
var BACustomerBeneficiary = require('./customer-maintenance/beneficiary-maintenance/endpoints');
var BACustomerAccounts = require('./customer-maintenance/accounts-maintenance/endpoints');
var BACustomerAuthorization = require('./customer-maintenance/authorization-maintenance/endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
};

apiEndpoints.routes = BABankRole
                        .concat(BABankAuthorization)
                        .concat(BABankUser)
                        .concat(BACustomerProfile)
                        .concat(BACustomerAdvancedProfile)
                        .concat(BACustomerUserProfile)
                        .concat(BACustomerUserAdvancedProfile)
                        .concat(BACustomerBranch)
                        .concat(BACustomerBeneficiary)
                        .concat(BACustomerAccounts)
                        .concat(BACustomerAuthorization);

module.exports = apiEndpoints;
