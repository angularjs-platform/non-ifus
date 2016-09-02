const moduleName: string = 'non.ifu.organization.app.bank.cru';

// Bundle - config
import {UiRouterConfig} from './bank-cru.routes';

// Controller
import {CRUBankController} from './bank-cru.controller';

angular.module(moduleName, [])
    .controller('CRUBankController', CRUBankController)
    .config(UiRouterConfig);

export default moduleName;
