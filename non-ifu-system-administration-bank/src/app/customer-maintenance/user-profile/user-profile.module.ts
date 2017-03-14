import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BACustomerUserProfileFormController} from './user-profile-form.controller';
import {BACustomerUserProfileListController} from './user-profile-list.controller';

// Service
import {BACustomerUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BACustomerUserProfileFormController', BACustomerUserProfileFormController)
    .controller('BACustomerUserProfileListController', BACustomerUserProfileListController)
    .service('BACustomerUserProfileService', BACustomerUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
