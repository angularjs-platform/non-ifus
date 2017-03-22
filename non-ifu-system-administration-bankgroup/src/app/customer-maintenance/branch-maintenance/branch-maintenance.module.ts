import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.branch-maintenance';

// Config
import {UiRouterConfig} from './branch-maintenance.routes';

// Controller
import {BGACustomerBranchFormController} from './branch-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerBranchFormController', BGACustomerBranchFormController)
    .config(UiRouterConfig);

export default moduleName;
