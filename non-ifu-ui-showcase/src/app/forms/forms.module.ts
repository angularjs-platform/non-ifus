const moduleName: string = 'non.ifu.ui-showcase.app.forms';

// Bundle - config
import {UiRouterConfig} from './forms.routes';

// Controller
import {ComponentsController} from './components/components.controller';
import {DynamicValidationsController} from './dynamic-validations/dynamic-validations.controller';

angular.module(moduleName, [])
    .controller('ComponentsController', ComponentsController)
    .controller('DynamicValidationsController', DynamicValidationsController)
    .config(UiRouterConfig);

export default moduleName;
