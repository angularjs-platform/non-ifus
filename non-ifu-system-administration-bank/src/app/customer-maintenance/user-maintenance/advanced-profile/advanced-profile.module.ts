import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.user-maintenance.advanced-profile';

// Config
import {UiRouterConfig} from './advanced-profile.routes';

// Controller
import {BACustomerUserAdvancedProfileFormController} from './advanced-profile-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerUserAdvancedProfileFormController', BACustomerUserAdvancedProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
