import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class CACustomerUserProfileService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/ca/customer/user';
}
