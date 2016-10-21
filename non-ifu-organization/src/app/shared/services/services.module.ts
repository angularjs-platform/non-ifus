const moduleName: string = 'non.ifu.organization.core.services';

// Services
import {CustomerManagementService} from './customer-management.service';
import {BankManagementService} from './bank-management.service';
import {ReferenceDataService} from './reference-data.service';

angular.module(moduleName, [])
    .service('CustomerManagementService', CustomerManagementService)
    .service('BankManagementService', BankManagementService)
    .service('ReferenceDataService', ReferenceDataService);

export default moduleName;
