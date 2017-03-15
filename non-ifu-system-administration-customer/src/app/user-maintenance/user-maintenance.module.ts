import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.user-maintenance';

// Config
import {UiRouterConfig} from './user-maintenance.routes';

// Internal modules
import profile from './profile/profile.module';
import advancedProfile from './advanced-profile/advanced-profile.module';

angular.module(moduleName, [profile, advancedProfile])
    .config(UiRouterConfig);

export default moduleName;
