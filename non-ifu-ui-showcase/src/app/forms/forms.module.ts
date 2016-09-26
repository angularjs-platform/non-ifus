const moduleName: string = 'non.ifu.ui-showcase.app.forms';

// Bundle - config
import {UiRouterConfig} from './forms.routes';

// Controller
import {DynamicValidationsController} from './dynamic-validations/dynamic-validations.controller';
import {LayoutsController} from './layouts/layouts.controller';

import {InputComponentsController} from './components/input/input.controller';
import {CheckboxComponentsController} from './components/checkbox/checkbox.controller';
import {RadiobuttonComponentsController} from './components/radiobutton/radiobutton.controller';
import {SelectComponentsController} from './components/select/select.controller';
import {DatepickerComponentsController} from './components/datepicker/datepicker.controller';
import {SwitchComponentsController} from './components/switch/switch.controller';
import {TextareaComponentsController} from './components/textarea/textarea.controller';

angular.module(moduleName, [])
    .controller('InputComponentsController', InputComponentsController)
    .controller('CheckboxComponentsController', CheckboxComponentsController)
    .controller('RadiobuttonComponentsController', RadiobuttonComponentsController)
    .controller('SelectComponentsController', SelectComponentsController)
    .controller('DatepickerComponentsController', DatepickerComponentsController)
    .controller('SwitchComponentsController', SwitchComponentsController)
    .controller('TextareaComponentsController', TextareaComponentsController)
    .controller('DynamicValidationsController', DynamicValidationsController)
    .controller('LayoutsController', LayoutsController)
    .config(UiRouterConfig);

export default moduleName;
