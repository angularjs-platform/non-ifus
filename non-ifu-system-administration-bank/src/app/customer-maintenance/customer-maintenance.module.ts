import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance';

// Config
import {UiRouterConfig} from './customer-maintenance.routes';

// Internal modules
import userProfile from './user-maintenance/profile/profile.module';
import userAdvancedProfile from './user-maintenance/advanced-profile/advanced-profile.module';
import profile from './profile-maintenance/profile/profile.module';
import advancedProfile from './profile-maintenance/advanced-profile/advanced-profile.module';
import authorizationMaintenance from './authorization-maintenance/authorization-maintenance.module';
import accountsMaintenance from './accounts-maintenance/accounts-maintenance.module';
import branchMaintenance from './branch-maintenance/branch-maintenance.module';
import beneficiaryMaintenance from './beneficiary-maintenance/beneficiary-maintenance.module';

angular.module(moduleName, [userProfile, userAdvancedProfile,
                            profile, advancedProfile, authorizationMaintenance, accountsMaintenance,
                            branchMaintenance, beneficiaryMaintenance])
        .config(UiRouterConfig);

export default moduleName;
