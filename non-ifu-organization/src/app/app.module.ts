const moduleName: string = 'non.ifu.organization.app';

// shared
import shared from './shared/shared.module';

// pages
import customer from './customer/customer.module';
import bank from './bank/bank.module';

angular.module(moduleName, [shared, customer, bank]);

export default moduleName;
