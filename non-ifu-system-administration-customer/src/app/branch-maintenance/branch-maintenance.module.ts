import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.branch-maintenance';

// Config
import {UiRouterConfig} from './branch-maintenance.routes';

// Controller
import {CACustomerBranchFormController} from './branch-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerBranchFormController', CACustomerBranchFormController)
    .config(UiRouterConfig);

export default moduleName;
