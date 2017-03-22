import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {CACustomerAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerAuthorizationFormController', CACustomerAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
