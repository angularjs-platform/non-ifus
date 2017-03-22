import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.authorization-maintenance';

// Config
import {UiRouterConfig} from './authorization-maintenance.routes';

// Controller
import {BABankAuthorizationFormController} from './authorization-form.controller';

angular.module(moduleName, [])
    .controller('BABankAuthorizationFormController', BABankAuthorizationFormController)
    .config(UiRouterConfig);

export default moduleName;
