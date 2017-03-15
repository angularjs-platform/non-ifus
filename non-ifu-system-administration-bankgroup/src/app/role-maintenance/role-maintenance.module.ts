import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.role-maintenance';

// Config
import {UiRouterConfig} from './role-maintenance.routes';

// Controller
import {BGABankGroupRoleFormController} from './role-form.controller';

angular.module(moduleName, [])
    .controller('BGABankGroupRoleFormController', BGABankGroupRoleFormController)
    .config(UiRouterConfig);

export default moduleName;
