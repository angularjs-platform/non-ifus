import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BGABankProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BGABankProfileFormController', BGABankProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
