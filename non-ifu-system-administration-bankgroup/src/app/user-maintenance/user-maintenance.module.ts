import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.user-maintenance';

// Config
import {UiRouterConfig} from './user-maintenance.routes';

// Controller
import {BGABankGroupUserProfileFormController} from './user-form.controller';

angular.module(moduleName, [])
    .controller('BGABankGroupUserProfileFormController', BGABankGroupUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
