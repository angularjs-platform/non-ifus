const moduleName: string = 'non.ifu.organization.app.bank';

// Internal modules
import list from './list/bank-list.module';
import cru from './cru/bank-cru.module';
import shared from './shared/shared.module';

angular.module(moduleName, [list, cru, shared]);

export default moduleName;
