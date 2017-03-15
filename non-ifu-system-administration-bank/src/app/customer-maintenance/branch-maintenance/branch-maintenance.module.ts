import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.branch-maintenance';

// Config
import {UiRouterConfig} from './branch-maintenance.routes';

// Controller
import {BACustomerBranchFormController} from './branch-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerBranchFormController', BACustomerBranchFormController)
    .config(UiRouterConfig);

export default moduleName;
