import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.bank-maintenance';

// Config
import {UiRouterConfig} from './bank-maintenance.routes';

// Internal modules
import userProfile from './user-maintenance/profile.module';
import profile from './profile-maintenance/profile.module';
import authorizationMaintenance from './authorization-maintenance/authorization-maintenance.module';

angular.module(moduleName, [userProfile, profile, authorizationMaintenance])
    .config(UiRouterConfig);

export default moduleName;
