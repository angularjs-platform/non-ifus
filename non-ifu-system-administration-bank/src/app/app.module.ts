const moduleName: string = 'non.ifu.system-administration-bank.app';

// Config
import {UiRouterConfig} from './app.routes';

// Internal modules
import bankMaintenance from './bank-maintenance/bank-maintenance.module';
import customerMaintenance from './customer-maintenance/customer-maintenance.module';

angular.module(moduleName, [bankMaintenance, customerMaintenance])
    .config(UiRouterConfig);

export default moduleName;
