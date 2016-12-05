import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BGACustomerProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/bga/customer';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public listBanks = (): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/selectbank').then(this.getCompleteHandler);
    };

    public listCustomers = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/list/' + orgId).then(this.getCompleteHandler);
    };
}