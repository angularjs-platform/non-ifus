const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bankgroup-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BABankgroupUserProfileFormController} from './user-profile-form.controller';
import {BABankgroupUserProfileListController} from './user-profile-list.controller';

// Service
import {BABankgroupUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BABankgroupUserProfileFormController', BABankgroupUserProfileFormController)
    .controller('BABankgroupUserProfileListController', BABankgroupUserProfileListController)
    .service('BABankgroupUserProfileService', BABankgroupUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
