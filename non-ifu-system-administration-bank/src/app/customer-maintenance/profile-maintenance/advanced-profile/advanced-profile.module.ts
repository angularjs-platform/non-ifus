import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.advanced-profile';

// Config
import {UiRouterConfig} from './advanced-profile.routes';

// Controller
import {BACustomerAdvancedProfileFormController} from './advanced-profile-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerAdvancedProfileFormController', BACustomerAdvancedProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
