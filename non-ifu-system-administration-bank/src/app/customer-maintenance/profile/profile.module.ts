import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.profile';

// Config
import {UiRouterConfig} from './profile.routes';

// Controller
import {BACustomerProfileFormController} from './profile-form.controller';
import {BACustomerProfileListController} from './profile-list.controller';

// Service
import {BACustomerProfileService} from './profile.service';

angular.module(moduleName, [])
    .controller('BACustomerProfileFormController', BACustomerProfileFormController)
    .controller('BACustomerProfileListController', BACustomerProfileListController)
    .service('BACustomerProfileService', BACustomerProfileService)
    .config(UiRouterConfig);

export default moduleName;
