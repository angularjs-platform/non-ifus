const moduleName: string = 'non.ifu.organization.app.bankgroup.user.shared.services';

// Services
import {BankGroupUserManagementService} from './user-management.service';

angular.module(moduleName, [])
    .service('BankGroupUserManagementService', BankGroupUserManagementService);

export default moduleName;
