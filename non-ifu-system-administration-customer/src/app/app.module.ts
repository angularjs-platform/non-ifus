import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app';

// Config
import {UiRouterConfig} from './app.routes';

// Internal modules
import userMaintenance from './user-maintenance/user-maintenance.module';
import roleMaintenance from './role-maintenance/role-maintenance.module';
import authorizationMaintenance from './authorization-maintenance/authorization-maintenance.module';
import accountsMaintenance from './accounts-maintenance/accounts-maintenance.module';
import branchMaintenance from './branch-maintenance/branch-maintenance.module';
import beneficiaryMaintenance from './beneficiary-maintenance/beneficiary-maintenance.module';

angular.module(moduleName, [userMaintenance, roleMaintenance, authorizationMaintenance,
                    accountsMaintenance, branchMaintenance, beneficiaryMaintenance])
    .config(UiRouterConfig);

export default moduleName;
