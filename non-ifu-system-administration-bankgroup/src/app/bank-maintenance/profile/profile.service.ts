import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BGABankProfileService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bga/bank';
}
