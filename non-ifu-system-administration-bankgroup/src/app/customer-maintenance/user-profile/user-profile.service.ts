import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BGACustomerUserProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/bga/customer/user';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public getListBanksUrl = (): string => {
        return this.baseUrl + '/selectbank';
    };

    public getListCustomersUrl = (orgId: Number): string => {
        return this.baseUrl + '/selectcustomer/' + orgId;
    };

    public getListUsersUrl = (orgId: Number): string => {
        return this.baseUrl + '/list/' + orgId;
    };
}
