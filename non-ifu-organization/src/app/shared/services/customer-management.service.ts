import {IOrganizationManagementService} from './organization-management';
import {OrganizationManagementService} from './organization-management.service';

export class CustomerManagementService extends OrganizationManagementService implements IOrganizationManagementService {

    public orgType: string = 'customer';
}
