import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.accounts-maintenance';

// Config
import {UiRouterConfig} from './accounts-maintenance.routes';

// Controller
import {BACustomerAccountsFormController} from './accounts-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerAccountsFormController', BACustomerAccountsFormController)
    .config(UiRouterConfig);

export default moduleName;
