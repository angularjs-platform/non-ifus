import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BankManagementService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bank';
}
