import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {BGABankGroupAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('BGABankGroupAuthorizationFormController', BGABankGroupAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
