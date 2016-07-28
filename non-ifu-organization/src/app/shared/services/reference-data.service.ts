import {IReferenceDataService} from './organization-management';

export class ReferenceDataService implements IReferenceDataService {

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public getCountryData = (): ng.IPromise<any> => {
        return this.$http.get('/reference-data/country/list').then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };

    public getCurrencyData = (): ng.IPromise<any> => {
        return this.$http.get('/reference-data/currency/list').then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };
}
