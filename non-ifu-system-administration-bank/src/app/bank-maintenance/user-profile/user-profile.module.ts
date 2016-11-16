const moduleName: string = 'non.ifu.system-administration-bank.app.bank-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BABankUserProfileFormController} from './user-profile-form.controller';
import {BABankUserProfileListController} from './user-profile-list.controller';

// Service
import {BABankUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BABankUserProfileFormController', BABankUserProfileFormController)
    .controller('BABankUserProfileListController', BABankUserProfileListController)
    .service('BABankUserProfileService', BABankUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
