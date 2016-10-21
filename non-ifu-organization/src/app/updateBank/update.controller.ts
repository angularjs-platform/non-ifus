import {IBankManagementService} from '../create/create.service';

export interface IUpdateBankController {
    bank: any;

    statuses: any;

    countryData: any;

    currencyData: any;

    update(bank: any): void;
}

export class UpdateBankController implements IUpdateBankController {

    public bank: any;

    public statuses: any;

    public countryData: any;

    public currencyData: any;


    constructor(
        private BankManagementService: IBankManagementService,
        private $mdToast:  angular.material.IToastService,
        private $stateParams: ng.ui.IStateParamsService) {
        'ngInject';
        this.statuses = [{ value: 'A', name: 'Active'} , { value: 'I', name: 'InActive'}];
        this.bank = this.BankManagementService.fetch(this.$stateParams['orgId']).then(this.handleSuccessfulFetch, this.handleErrorFetch);
    }

    public update = (bank: any): void => {
        this.BankManagementService.update(bank).then(this.handleSuccessfulSave, this.handleErrorSave);
    };

    private handleSuccessfulSave = (response: any): void  => {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully Updated Bank!')
            .position('top right'));
    };

    private handleErrorSave = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Update Bank. Please try again!'));
        this.bank = null;
    };
    private handleSuccessfulFetch = (response: any): void  => {
        this.bank = response.orgVO;
    };

    private handleErrorFetch = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Fetch Bank. Please try again!'));
        this.bank = null;
    };
    private handleCountryDataList = (response: any): void  => {
        this.countryData = response;
    };

    private handleCurrencyDataList = (response: any): void  => {
        this.currencyData = response;
    };
}
