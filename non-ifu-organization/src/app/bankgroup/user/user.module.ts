const moduleName: string = 'non.ifu.organization.app.bankgroup.user';

// Internal modules
import list from './list/user-list.module';
import cru from './cru/user-cru.module';
import shared from './shared/shared.module';

angular.module(moduleName, [list, cru, shared]);

export default moduleName;
