import { IEntityManagementService } from '@norn/non-framework';

export class ListBankController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BankManagementService: IEntityManagementService) {
        'ngInject';
    }

    public view = (bank: any): void => {
        this.$state.go('app.bankView', {orgId : bank.id});
    };

    public edit = (bank: any): void => {
         this.$state.go('app.bankUpdate', {orgId : bank.id});
    };

    public delete = (bank: any): void => {
        this.BankManagementService.delete(bank.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the bank!')));
    };
}
