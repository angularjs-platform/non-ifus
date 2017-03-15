import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.advanced-profile';

// Config
import {UiRouterConfig} from './advanced-profile.routes';

// Controller
import {BGACustomerAdvancedProfileFormController} from './advanced-profile-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerAdvancedProfileFormController', BGACustomerAdvancedProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
