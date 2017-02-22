import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bankgroup-maintenance';

// Config
import {UiRouterConfig} from './bankgroup-maintenance.routes';

// Internal modules
import userProfile from './user-profile/user-profile.module';

angular.module(moduleName, [userProfile])
    .config(UiRouterConfig);

export default moduleName;
