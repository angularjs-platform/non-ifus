const moduleName: string = 'non.ifu.organization.app.create';

// Bundle - config
import {UiRouterConfig} from './create.routes';

// Controller
import {CreateCustomerController} from './create.controller';

angular.module(moduleName, [])
    .controller('CreateCustomerController', CreateCustomerController)
    .config(UiRouterConfig);


export default moduleName;
