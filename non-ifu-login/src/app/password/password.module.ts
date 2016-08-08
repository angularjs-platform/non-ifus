const moduleName: string = 'non.ifu.login.app.password';

// Bundle - config
import {UiRouterConfig} from './password.routes';

// Controller
import {PasswordController} from './password.controller';

angular.module(moduleName, [])
    .controller('PasswordController', PasswordController)
    .config(UiRouterConfig);

export default moduleName;
