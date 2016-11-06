import {EntityManagementService, IEntityManagementService} from '@norn/non-framework';

export class BankManagementService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bank';
}
