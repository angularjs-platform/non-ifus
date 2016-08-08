const moduleName: string = 'non.ifu.organization.app.bankmgmt.list';

// Bundle - config
import {UiRouterConfig} from './list.routes';

// Controller
import {ListBankController} from './list.controller';

// Service
import {BankManagementService} from '../create/create.service';

angular.module(moduleName, [])
    .controller('ListBankController', ListBankController)
    .config(UiRouterConfig)
    .service('BankManagementService', BankManagementService);


export default moduleName;
