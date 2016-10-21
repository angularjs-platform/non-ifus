import {IOrganizationManagementService} from './organization-management';

export abstract class OrganizationManagementService implements IOrganizationManagementService {

    public orgType: string;

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public save = (org: any): ng.IPromise<any> => {
        console.log(org);
        return this.$http.post('/organization/' + this.orgType + '/create', {orgVO : org}).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public update = (org: any): ng.IPromise<any> => {
        return this.$http.post('/organization/' + this.orgType + '/update', {orgVO : org}).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public list = (): ng.IPromise<any> => {
        return this.$http.get('/organization/' + this.orgType + '/list').then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public fetch = (orgId: Number): ng.IPromise<any> => {
        return this.$http.post('/organization/' + this.orgType + '/id', orgId).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };
}
