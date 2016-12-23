import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BACustomerUserProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/ba/customer/user';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public getListCustomersUrl = (): string => {
        return this.baseUrl + '/selectcustomer';
    };

    public getListUsersUrl = (orgId: Number): string => {
        return this.baseUrl + '/list/' + orgId;
    };
}
