import {ICustomerManagementService} from '../../core/core.model';

export interface IUpdateCustomerController {
    customer: any;

    statuses: any;

    countryData: any;

    currencyData: any;

    update(customer: any): void;
}

export class UpdateCustomerController implements IUpdateCustomerController {

    public customer: any;

    public statuses: any;

    public countryData: any;

    public currencyData: any;

    constructor(
        private CustomerManagementService: ICustomerManagementService,
        private $mdToast:  angular.material.IToastService,
        private $stateParams: ng.ui.IStateParamsService) {
        'ngInject';
        this.statuses = [{ value: 'A', name: 'Active'} , { value: 'I', name: 'InActive'}];
        this.customer = this.CustomerManagementService.fetch(this.$stateParams['orgId']).then(this.handleSuccessfulFetch, this.handleErrorFetch);

        this.CustomerManagementService.getCountryData().then(this.handleCountryDataList);
        this.CustomerManagementService.getCurrencyData().then(this.handleCurrencyDataList);

    }

    public update = (customer: any): void => {
        this.CustomerManagementService.update(customer).then(this.handleSuccessfulSave, this.handleErrorSave);
    };

    private handleSuccessfulSave = (response: any): void  => {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully Updated Customer!')
            .position('top right'));
    };

    private handleErrorSave = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Update Customer. Please try again!'));
        this.customer = null;
    };
    private handleSuccessfulFetch = (response: any): void  => {
        this.customer = response.orgVO;
    };

    private handleErrorFetch = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Fetch Customer. Please try again!'));
        this.customer = null;
    };
    private handleCountryDataList = (response: any): void  => {
        this.countryData = response;
    };

    private handleCurrencyDataList = (response: any): void  => {
        this.currencyData = response;
    };
}
