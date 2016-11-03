const moduleName: string = 'non.ifu.organization.app.user.list';

// Bundle - config
import {UiRouterConfig} from './user-list.routes';

import {ListBankGroupUserController} from './user-list.controller';

angular.module(moduleName, [])
    .controller('ListBankGroupUserController', ListBankGroupUserController)
    .config(UiRouterConfig);


export default moduleName;
