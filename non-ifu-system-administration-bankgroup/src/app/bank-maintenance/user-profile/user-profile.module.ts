import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BGABankUserProfileFormController} from './user-profile-form.controller';
import {BGABankUserProfileListController} from './user-profile-list.controller';
import {BGABankUserSelectBankListController} from './user-profile-list-select-bank.controller';

// Service
import {BGABankUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BGABankUserProfileFormController', BGABankUserProfileFormController)
    .controller('BGABankUserProfileListController', BGABankUserProfileListController)
    .controller('BGABankUserSelectBankListController', BGABankUserSelectBankListController)
    .service('BGABankUserProfileService', BGABankUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
