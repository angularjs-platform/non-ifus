import {IOrganizationManagementService} from './organization-management';
import {OrganizationManagementService} from './organization-management.service';

export class BankManagementService extends OrganizationManagementService implements IOrganizationManagementService {

    public orgType: string = 'bank';
}
