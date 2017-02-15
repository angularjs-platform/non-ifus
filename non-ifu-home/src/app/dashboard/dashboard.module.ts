import * as angular from 'angular';

const moduleName: string = 'non.ifu.home.app.dashboard';

// Bundle - config
import {UiRouterConfig} from './dashboard.routes';

// Controller
import {DashboardController} from './dashboard.controller';

angular.module(moduleName, [])
    .controller('DashboardController', DashboardController)
    .config(UiRouterConfig);

export default moduleName;
