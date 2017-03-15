import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.user-maintenance.advanced-profile';

// Config
import {UiRouterConfig} from './advanced-profile.routes';

// Controller
import {CACustomerUserAdvancedProfileFormController} from './advanced-profile-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerUserAdvancedProfileFormController', CACustomerUserAdvancedProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
