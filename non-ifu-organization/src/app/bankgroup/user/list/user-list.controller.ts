import {IEntityManagementService} from '@norn/non-shared-system-administration';

export class ListBankGroupUserController {

    constructor(
        private $mdToast: ng.material.IToastService,
        private $state: ng.ui.IStateService,
        private BankGroupUserManagementService: IEntityManagementService) {
        'ngInject';
    }

    public view = (user: any): void => {
        this.$state.go('app.bankGroupUserView', {userId : user.id});
    };

    public edit = (user: any): void => {
         this.$state.go('app.bankGroupUserUpdate', {userId : user.id});
    };

    public delete = (user: any): void => {
        this.BankGroupUserManagementService.delete(user.id).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent('Successfully deleted the user!')));
    };
}
