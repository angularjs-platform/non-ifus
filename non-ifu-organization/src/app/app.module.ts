const moduleName: string = 'non.ifu.organization.app';

// shared
import shared from './shared/shared.module';

// pages
import bank from './bank/bank.module';
import bankgroup from './bankgroup/bankgroup.module';

angular.module(moduleName, [shared, bank, bankgroup]);

export default moduleName;
