import {IBankManagementService} from '../create/create.service';

export interface IListBankController {
    bankList: Array<Object>;
    edit(bank: Number): void;
}

export class ListBankController implements IListBankController {

    public bankList: Array<Object>;

    constructor(
        private BankManagementService: IBankManagementService,
        private $mdToast:  angular.material.IToastService,
        private $state: ng.ui.IStateService) {
        'ngInject';
        this.bankList = null;
        this.BankManagementService.list().then(this.handleSuccessfulList, this.handleErrorList);
    }
    public edit = (bank: Number): void => {
         this.$state.go('app.bankUpdate', {orgId : bank});
    };

    private handleSuccessfulList = (response: any): void  => {
        // Example of a toaster with position
        // Remove this later on when not needed
        console.log(response);
        this.bankList = response;
    };

    private handleErrorList = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to Fetch Banks. Please try again!'));
    };
}
