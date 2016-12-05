const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BGACustomerUserProfileFormController} from './user-profile-form.controller';
import {BGACustomerUserProfileListController} from './user-profile-list.controller';
import {BGACustomerUserSelectCustomerListController} from './user-profile-list-select-customer.controller';
import {BGACustomerUserSelectBankListController} from './user-profile-list-select-bank.controller';

// Service
import {BGACustomerUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BGACustomerUserProfileFormController', BGACustomerUserProfileFormController)
    .controller('BGACustomerUserProfileListController', BGACustomerUserProfileListController)
    .controller('BGACustomerUserSelectCustomerListController', BGACustomerUserSelectCustomerListController)
    .controller('BGACustomerUserSelectBankListController', BGACustomerUserSelectBankListController)
    .service('BGACustomerUserProfileService', BGACustomerUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
