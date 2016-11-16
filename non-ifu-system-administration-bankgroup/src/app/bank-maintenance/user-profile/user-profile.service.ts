import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BGABankUserProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/bga/bank/user';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public listBanks = (): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/selectbank').then(this.getCompleteHandler);
    };

    public listUsers = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/list/' + orgId).then(this.getCompleteHandler);
    };
}
