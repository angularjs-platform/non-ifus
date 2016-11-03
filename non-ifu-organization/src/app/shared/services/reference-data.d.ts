export interface IReferenceDataService {

    getCountryData(): ng.IPromise<any>;

    getCurrencyData(): ng.IPromise<any>;
}
