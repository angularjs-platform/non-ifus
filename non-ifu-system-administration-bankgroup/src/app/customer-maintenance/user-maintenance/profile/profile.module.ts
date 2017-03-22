import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.user-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGACustomerUserProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerUserProfileFormController', BGACustomerUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
