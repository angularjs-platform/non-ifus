const moduleName: string = 'non.ifu.organization.app.bankmgmt.update';

// Bundle - config
import {UiRouterConfig} from './update.routes';

// Controller
import {UpdateBankController} from './update.controller';

// Service
import {BankManagementService} from '../create/create.service';

angular.module(moduleName, [])
    .controller('UpdateBankController', UpdateBankController)
    .config(UiRouterConfig)
    .service('BankManagementService', BankManagementService);


export default moduleName;