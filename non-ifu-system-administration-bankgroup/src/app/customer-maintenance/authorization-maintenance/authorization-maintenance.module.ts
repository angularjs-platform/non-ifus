import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {BGACustomerAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerAuthorizationFormController', BGACustomerAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
