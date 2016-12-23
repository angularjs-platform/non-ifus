import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BGACustomerProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/bga/customer';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public getListBanksUrl = (): string => {
        return this.baseUrl + '/selectbank';
    };

    public getListCustomersUrl = (orgId: Number): string => {
        return this.baseUrl + '/list/' + orgId;
    };
}
