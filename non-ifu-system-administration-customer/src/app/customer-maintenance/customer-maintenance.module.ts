const moduleName: string = 'non.ifu.system-administration-customer.app.customer-maintenance';

// Config
import {UiRouterConfig} from './customer-maintenance.routes';

// Internal modules
import userProfile from './user-profile/user-profile.module';

angular.module(moduleName, [userProfile])
    .config(UiRouterConfig);

export default moduleName;
