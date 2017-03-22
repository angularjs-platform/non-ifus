import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {BACustomerAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerAuthorizationFormController', BACustomerAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
