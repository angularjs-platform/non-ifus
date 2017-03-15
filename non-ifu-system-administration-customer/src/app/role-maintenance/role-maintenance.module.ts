import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.role-maintenance';

// Config
import {UiRouterConfig} from './role-maintenance.routes';

// Controller
import {CACustomerRoleFormController} from './role-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerRoleFormController', CACustomerRoleFormController)
    .config(UiRouterConfig);

export default moduleName;
