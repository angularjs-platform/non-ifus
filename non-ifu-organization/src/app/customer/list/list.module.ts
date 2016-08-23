const moduleName: string = 'non.ifu.organization.app.customer.list';

// Bundle - config
import {UiRouterConfig} from './list.routes';

import {ListCustomerController} from './list.controller';

angular.module(moduleName, [])
    .controller('ListCustomerController', ListCustomerController)
    .config(UiRouterConfig);


export default moduleName;
