const moduleName: string = 'non.ifu.organization.app.customermgmt.create';

// Bundle - config
import {UiRouterConfig} from './create.routes';

// Controller
import {CreateCustomerController} from './create.controller';

angular.module(moduleName, [])
    .controller('CreateCustomerController', CreateCustomerController)
    .config(UiRouterConfig);


export default moduleName;
