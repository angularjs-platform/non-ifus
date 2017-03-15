import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.user-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BACustomerUserProfileFormController} from './profile-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerUserProfileFormController', BACustomerUserProfileFormController)
    .config(UiRouterConfig);

export default moduleName;
