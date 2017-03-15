import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.user-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {CACustomerUserProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerUserProfileFormController', CACustomerUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
