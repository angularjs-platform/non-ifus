const moduleName: string = 'non.ifu.customermgmt.functions.update';

import * as angular from 'angular';

// Bundle - config
import {UiRouterConfig} from './update.routes';

// Controller
import {UpdateCustomerController} from './update.controller';

// Service

angular.module(moduleName, [])
    .controller('UpdateCustomerController', UpdateCustomerController)
    .config(UiRouterConfig);


export default moduleName;
