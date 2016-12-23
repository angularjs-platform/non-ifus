import {EntityManagementService} from '@norn/non-shared-system-administration';

export class BGABankUserProfileService extends EntityManagementService {

    public baseUrl: string = '/organization/bga/bank/user';

    constructor (public $http: ng.IHttpService) {
        'ngInject';

        super($http);
    }

    public getListBanksUrl = (): string => {
        return this.baseUrl + '/selectbank';
    };

    public getListUsersUrl = (orgId: Number): string => {
        return this.baseUrl + '/list/' + orgId;
    };
}
