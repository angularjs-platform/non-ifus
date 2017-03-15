import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {BGABankAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('BGABankAuthorizationFormController', BGABankAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
