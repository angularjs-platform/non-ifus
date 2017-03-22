import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.accounts-maintenance';

// Config
import {UiRouterConfig} from './accounts-maintenance.routes';

// Controller
import {CACustomerAccountsFormController} from './accounts-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerAccountsFormController', CACustomerAccountsFormController)
    .config(UiRouterConfig);

export default moduleName;
