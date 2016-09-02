const moduleName: string = 'non.ifu.organization.app.bank.list';

// Bundle - config
import {UiRouterConfig} from './bank-list.routes';

import {ListBankController} from './bank-list.controller';

angular.module(moduleName, [])
    .controller('ListBankController', ListBankController)
    .config(UiRouterConfig);


export default moduleName;
