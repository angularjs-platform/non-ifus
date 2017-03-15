import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.user-maintenance.advanced-profile';

// Config
import {UiRouterConfig} from './advanced-profile.routes';

// Controller
import {BGACustomerUserAdvancedProfileFormController} from './advanced-profile-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerUserAdvancedProfileFormController', BGACustomerUserAdvancedProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
