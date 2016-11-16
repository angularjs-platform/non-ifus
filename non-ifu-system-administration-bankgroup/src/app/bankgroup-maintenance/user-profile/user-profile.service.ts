import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BABankgroupUserProfileService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/bga/bankgroup/user';
}
