const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGACustomerProfileFormController} from './profile-form.controller';
import {BGACustomerProfileListController} from './profile-list.controller';
import {BGACustomerSelectBankListController} from './profile-list-select-bank.controller';

// Service
import {BGACustomerProfileService} from './profile.service';

angular.module(moduleName, [])
    .controller('BGACustomerProfileFormController', BGACustomerProfileFormController)
    .controller('BGACustomerProfileListController', BGACustomerProfileListController)
    .controller('BGACustomerSelectBankListController', BGACustomerSelectBankListController)
    .service('BGACustomerProfileService', BGACustomerProfileService)
    .config(UiRouterConfig);

export default moduleName;
