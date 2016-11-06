import {EntityManagementService, IEntityManagementService} from '@norn/non-framework';

export class BankGroupUserManagementService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bankgroup/user';
}
