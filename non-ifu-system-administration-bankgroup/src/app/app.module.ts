import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app';

// Config
import {UiRouterConfig} from './app.routes';

// Internal modules
import userMaintenance from './user-maintenance/user-maintenance.module';
import roleMaintenance from './role-maintenance/role-maintenance.module';
import authorizationMaintenance from './authorization-maintenance/authorization-maintenance.module';
import bankMaintenance from './bank-maintenance/bank-maintenance.module';
import customerMaintenance from './customer-maintenance/customer-maintenance.module';

angular.module(moduleName, [userMaintenance, roleMaintenance, authorizationMaintenance, bankMaintenance, customerMaintenance])
    .config(UiRouterConfig);

export default moduleName;
