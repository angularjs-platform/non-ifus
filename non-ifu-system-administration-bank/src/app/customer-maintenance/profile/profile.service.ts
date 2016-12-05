import {EntityManagementService, IEntityManagementService} from '@norn/non-shared-system-administration';

export class BACustomerProfileService extends EntityManagementService implements IEntityManagementService {

    public baseUrl: string = '/organization/ba/customer';
}
