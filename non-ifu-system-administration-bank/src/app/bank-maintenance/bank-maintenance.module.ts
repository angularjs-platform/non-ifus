const moduleName: string = 'non.ifu.system-administration-bank.app.bank-maintenance';

// Config
import {UiRouterConfig} from './bank-maintenance.routes';

// Internal modules
import userProfile from './user-profile/user-profile.module';

angular.module(moduleName, [userProfile])
    .config(UiRouterConfig);

export default moduleName;
