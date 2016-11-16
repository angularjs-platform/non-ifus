const moduleName: string = 'non.ifu.system-administration-customer.app.customer-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {CACustomerUserProfileFormController} from './user-profile-form.controller';
import {CACustomerUserProfileListController} from './user-profile-list.controller';

// Service
import {CACustomerUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('CACustomerUserProfileFormController', CACustomerUserProfileFormController)
    .controller('CACustomerUserProfileListController', CACustomerUserProfileListController)
    .service('CACustomerUserProfileService', CACustomerUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
