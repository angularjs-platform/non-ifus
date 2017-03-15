import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance.user-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGABankUserProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BGABankUserProfileFormController', BGABankUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
