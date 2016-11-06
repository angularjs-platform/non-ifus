import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BankGroupUserManagementService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bankgroup/user';
}
