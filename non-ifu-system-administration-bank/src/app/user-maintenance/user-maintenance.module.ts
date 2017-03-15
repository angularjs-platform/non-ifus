import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.user-maintenance';

// Config
import {UiRouterConfig} from './user-maintenance.routes';

// Controller
import {BABankUserProfileFormController} from './user-form.controller';

angular.module(moduleName, [])
    .controller('BABankUserProfileFormController', BABankUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
