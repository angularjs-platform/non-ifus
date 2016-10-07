import {IOrganizationManagementService} from './organization-management';

export abstract class OrganizationManagementService implements IOrganizationManagementService {

    public orgType: string;

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public initiate = (): ng.IPromise<any> => {
        return this.$http.get('/organization/' + this.orgType + '/initiate').then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public create = (org: any): ng.IPromise<any> => {
        return this.$http.post('/organization/' + this.orgType + '/create', org).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public edit = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get('/organization/' + this.orgType + '/edit/' + orgId).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public view = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get('/organization/' + this.orgType + '/view/' + orgId).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public update = (org: any): ng.IPromise<any> => {
        return this.$http.post('/organization/' + this.orgType + '/update', org).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public delete = (orgId: Number): ng.IPromise<any> => {
        return this.$http.post('/organization/' + this.orgType + '/delete', {id: orgId}).then(getCompleteHandler);

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
}
