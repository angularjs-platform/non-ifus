import * as angular from 'angular';

const moduleName: string = 'non.ifu.ui-showcase.app';

// Bundle - config
import {UiRouterConfig} from './app.routes';

import forms from './forms/forms.module';

angular.module(moduleName, [forms])
    .config(UiRouterConfig);

export default moduleName;
