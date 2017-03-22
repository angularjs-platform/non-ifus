var BGABankGroupRole = require('./role-maintenance/endpoints');
var BGABankGroupAuthorization = require('./authorization-maintenance/endpoints');
var BGABankGroupUser = require('./user-maintenance/endpoints');

var BGACustomerProfile = require('./customer-maintenance/profile-maintenance/profile/endpoints');
var BGACustomerAdvancedProfile = require('./customer-maintenance/profile-maintenance/advanced-profile/endpoints');
var BGACustomerUserProfile = require('./customer-maintenance/user-maintenance/profile/endpoints');
var BGACustomerUserAdvancedProfile = require('./customer-maintenance/user-maintenance/advanced-profile/endpoints');
var BGACustomerBranch = require('./customer-maintenance/branch-maintenance/endpoints');
var BGACustomerBeneficiary = require('./customer-maintenance/beneficiary-maintenance/endpoints');
var BGACustomerAccounts = require('./customer-maintenance/accounts-maintenance/endpoints');
var BGACustomerAuthorization = require('./customer-maintenance/authorization-maintenance/endpoints');

var BGABankProfile = require('./bank-maintenance/profile-maintenance/endpoints');
var BGABankUserProfile = require('./bank-maintenance/user-maintenance/endpoints');
var BGABankAuthorization = require('./bank-maintenance/authorization-maintenance/endpoints');

var apiEndpoints = {
    mainUrl: '',
    routes: []
};

apiEndpoints.routes = BGABankGroupRole
                        .concat(BGABankGroupAuthorization)
                        .concat(BGABankGroupUser)
                        .concat(BGACustomerProfile)
                        .concat(BGACustomerAdvancedProfile)
                        .concat(BGACustomerUserProfile)
                        .concat(BGACustomerUserAdvancedProfile)
                        .concat(BGACustomerBranch)
                        .concat(BGACustomerBeneficiary)
                        .concat(BGACustomerAccounts)
                        .concat(BGACustomerAuthorization)
                        .concat(BGABankProfile)
                        .concat(BGABankUserProfile)
                        .concat(BGABankAuthorization);

module.exports = apiEndpoints;
