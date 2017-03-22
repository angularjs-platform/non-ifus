import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BACustomerProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerProfileFormController', BACustomerProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
