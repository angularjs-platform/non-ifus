const moduleName: string = 'non.ifu.login.functions';

import * as angular from 'angular';

import password from './password/password.module';

angular.module(moduleName, [password]);

export default moduleName;
