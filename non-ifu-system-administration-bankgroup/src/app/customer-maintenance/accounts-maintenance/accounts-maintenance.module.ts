import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.accounts-maintenance';

// Config
import {UiRouterConfig} from './accounts-maintenance.routes';

// Controller
import {BGACustomerAccountsFormController} from './accounts-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerAccountsFormController', BGACustomerAccountsFormController)
    .config(UiRouterConfig);

export default moduleName;
