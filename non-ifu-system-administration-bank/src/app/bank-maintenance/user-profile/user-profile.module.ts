import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.bank-maintenance.user-profile';

// Config
import {UiRouterConfig} from './user-profile.routes';

// Controller
import {BABankUserProfileFormController} from './user-profile-form.controller';

// Service
import {BABankUserProfileService} from './user-profile.service';

angular.module(moduleName, [])
    .controller('BABankUserProfileFormController', BABankUserProfileFormController)
    .service('BABankUserProfileService', BABankUserProfileService)
    .config(UiRouterConfig);

export default moduleName;
