import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BACustomerUserProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/ba/customer/user';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public listCustomers = (): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/selectcustomer').then(this.getCompleteHandler);
    };

    public listUsers = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/list/' + orgId).then(this.getCompleteHandler);
    };
}
