const moduleName: string = 'non.ifu.system-administration-bankgroup.app';

// Config
import {UiRouterConfig} from './app.routes';

// Internal modules
import bankgroupMaintenance from './bankgroup-maintenance/bankgroup-maintenance.module';
import bankMaintenance from './bank-maintenance/bank-maintenance.module';
import customerMaintenance from './customer-maintenance/customer-maintenance.module';

angular.module(moduleName, [bankgroupMaintenance, bankMaintenance, customerMaintenance])
    .config(UiRouterConfig);

export default moduleName;
