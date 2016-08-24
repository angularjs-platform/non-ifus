import {IOrganizationManagementService, IReferenceDataService} from '../shared/shared.model';

export class CreateCustomerController {

    public customer: any;

    public statuses: any;

    public countryData: any;

    public currencyData: any;

    constructor(
        private CustomerManagementService: IOrganizationManagementService,
        private ReferenceDataService: IReferenceDataService,
        private $mdToast:  angular.material.IToastService,
        countryData: any,
        currencyData: any) {
        'ngInject';

        this.statuses = [{ value: 'A', name: 'Active'} , { value: 'I', name: 'InActive'}];
        this.customer = null;
        this.countryData = countryData;
        this.currencyData = currencyData;
    }

    public save = (customer: any): void => {
        customer.orgType = '03';
        this.CustomerManagementService.save(customer).then(this.handleSuccessfulSave, this.handleErrorSave);
    };

    private handleSuccessfulSave = (response: any): void  => {

        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully Saved Customer!' + response.customerVO)
            .position('top right'));
    };

    private handleErrorSave = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to login. Please try again!'));
        this.customer = null;
    };
}
