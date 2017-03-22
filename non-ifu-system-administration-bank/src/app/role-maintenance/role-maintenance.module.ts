import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.role-maintenance';

// Config
import {UiRouterConfig} from './role-maintenance.routes';

// Controller
import {BABankRoleFormController} from './role-form.controller';

angular.module(moduleName, [])
    .controller('BABankRoleFormController', BABankRoleFormController)
    .config(UiRouterConfig);

export default moduleName;
