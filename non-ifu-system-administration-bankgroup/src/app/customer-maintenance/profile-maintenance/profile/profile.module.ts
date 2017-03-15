import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGACustomerProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerProfileFormController', BGACustomerProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
