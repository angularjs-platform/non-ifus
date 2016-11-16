const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance';

// Config
import {UiRouterConfig} from './customer-maintenance.routes';

// Internal modules
import profile from './profile/profile.module';
import userProfile from './user-profile/user-profile.module';

angular.module(moduleName, [profile, userProfile])
    .config(UiRouterConfig);

export default moduleName;
