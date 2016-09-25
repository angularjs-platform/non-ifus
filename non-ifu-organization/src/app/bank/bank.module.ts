const moduleName: string = 'non.ifu.organization.app.bank';

// Internal modules
import list from './list/bank-list.module';
import cru from './cru/bank-cru.module';

angular.module(moduleName, [list, cru]);

export default moduleName;
