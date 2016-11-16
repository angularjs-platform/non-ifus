import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BABankUserProfileService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/ba/bank/user';
}
