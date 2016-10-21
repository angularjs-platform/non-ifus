import {IBankManagementService} from './create.service';

export interface ICreateBankController {
    bank: any;

    statuses: any;

    countryData: any;

    currencyData: any;


    save(bank: any): void;
}

export class CreateBankController implements ICreateBankController {

    public bank: any;

    public statuses: any;

    public countryData: any;

    public currencyData: any;

    constructor(
        private BankManagementService: IBankManagementService,
        private $mdToast:  angular.material.IToastService) {
        'ngInject';

        this.statuses = [{ value: 'A', name: 'Active'} , { value: 'I', name: 'InActive'}];
        this.bank = null;
    }

    public save = (bank: any): void => {
        bank.orgType = '02';
        this.BankManagementService.save(bank).then(this.handleSuccessfulSave, this.handleErrorSave);
    };

    private handleSuccessfulSave = (response: any): void  => {
        // Example of a toaster with position
        // Remove this later on when not needed
        console.log(response);
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully Saved Bank!' + response.bankVO)
            .position('top right'));
    };

    private handleErrorSave = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Save. Please try again!'));
        this.bank = null;
    };

    private handleCountryDataList = (response: any): void  => {
        this.countryData = response;
    };

    private handleCurrencyDataList = (response: any): void  => {
        this.currencyData = response;
    };
}
