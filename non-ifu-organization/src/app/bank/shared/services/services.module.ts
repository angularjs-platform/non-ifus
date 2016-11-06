const moduleName: string = 'non.ifu.organization.app.bank.shared.services';

// Services
import {BankManagementService} from './bank-management.service';

angular.module(moduleName, [])
    .service('BankManagementService', BankManagementService);

export default moduleName;
