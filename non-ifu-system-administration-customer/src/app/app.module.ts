import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app';

// Config
import {UiRouterConfig} from './app.routes';

// Internal modules
import customerMaintenance from './customer-maintenance/customer-maintenance.module';

angular.module(moduleName, [customerMaintenance])
    .config(UiRouterConfig);

export default moduleName;
