const moduleName: string = 'non.ifu.login';

import * as angular from 'angular';

import nonFramework from '@norn/non-framework';

import loginCore from './core/core.module';
import loginFunctions from './functions/functions.module';

angular.module(moduleName, [nonFramework, loginCore, loginFunctions]);

export default moduleName;
