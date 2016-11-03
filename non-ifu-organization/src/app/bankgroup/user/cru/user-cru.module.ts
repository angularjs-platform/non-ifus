const moduleName: string = 'non.ifu.organization.app.user.cru';

// Bundle - config
import {UiRouterConfig} from './user-cru.routes';

// Controller
import {CRUBankGroupUserController} from './user-cru.controller';

angular.module(moduleName, [])
    .controller('CRUBankGroupUserController', CRUBankGroupUserController)
    .config(UiRouterConfig);

export default moduleName;
