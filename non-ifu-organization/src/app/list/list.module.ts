const moduleName: string = 'non.ifu.customermgmt.functions.list';

import * as angular from 'angular';

// Bundle - config
import {UiRouterConfig} from './list.routes';

// Controller
import {ListCustomerController} from './list.controller';

// Service
import {CustomerManagementService} from '../create/create.service';

angular.module(moduleName, [])
    .controller('ListCustomerController', ListCustomerController)
    .config(UiRouterConfig)
    .service('CustomerManagementService', CustomerManagementService);


export default moduleName;