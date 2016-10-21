export interface IBankManagementService {

    save(bank: any): ng.IPromise<any>;

    list(): ng.IPromise<any>;

    fetch(orgId: Number): ng.IPromise<any>;

    update(bank: any): ng.IPromise<any>;
}

export class BankManagementService implements IBankManagementService {

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public save = (bank: any): ng.IPromise<any> => {
        return this.$http.post('/organization/bank/create', {orgVO : bank}).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public update = (bank: any): ng.IPromise<any> => {
        return this.$http.post('/organization/bank/update', {orgVO : bank}).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public list = (): ng.IPromise<any> => {
        return this.$http.get('/organization/bank/list').then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public fetch = (orgId: Number): ng.IPromise<any> => {
        return this.$http.post('/organization/bank/id', orgId).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };
}
