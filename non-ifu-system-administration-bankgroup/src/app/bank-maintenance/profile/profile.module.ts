import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGABankProfileFormController} from './profile-form.controller';
import {BGABankProfileListController} from './profile-list.controller';

// Service
import {BGABankProfileService} from './profile.service';

angular.module(moduleName, [])
    .controller('BGABankProfileFormController', BGABankProfileFormController)
    .controller('BGABankProfileListController', BGABankProfileListController)
    .service('BGABankProfileService', BGABankProfileService)
    .config(UiRouterConfig);

export default moduleName;
