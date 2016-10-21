export interface IOrganizationManagementService {

    orgType: string;

    save(org: any): ng.IPromise<any>;

    list(): ng.IPromise<any>;

    fetch(orgId: Number): ng.IPromise<any>;

    update(org: any): ng.IPromise<any>;
}

export interface IReferenceDataService {

    getCountryData(): ng.IPromise<any>;

    getCurrencyData(): ng.IPromise<any>;
}
