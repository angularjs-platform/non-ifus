export interface IOrganizationManagementService {

    orgType: string;

    initiate(): ng.IPromise<any>;

    create(org: any): ng.IPromise<any>;

    edit(orgId: Number): ng.IPromise<any>;

    view(orgId: Number): ng.IPromise<any>;

    update(org: any): ng.IPromise<any>;

    delete(orgId: Number): ng.IPromise<any>;

    list(): ng.IPromise<any>;
}

export interface IReferenceDataService {

    getCountryData(): ng.IPromise<any>;

    getCurrencyData(): ng.IPromise<any>;
}
