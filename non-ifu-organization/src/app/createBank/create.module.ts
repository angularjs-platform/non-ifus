const moduleName: string = 'non.ifu.bankmgmt.functions.create';

import * as angular from 'angular';

// Bundle - config
import {UiRouterConfig} from './create.routes';

// Controller
import {CreateBankController} from './create.controller';

// Service
import {BankManagementService} from './create.service';

angular.module(moduleName, [])
    .controller('CreateBankController', CreateBankController)
    .config(UiRouterConfig)
    .service('BankManagementService', BankManagementService);


export default moduleName;
